/**
 * Chat widget do site Fratazzi Advogados.
 *
 * Uso: adicionar no fim do <body> do site:
 *   <script src="https://fratazziadvogados.com.br/widget.js"
 *           data-endpoint="https://chat.fratazziadvogados.com.br/api/chat"
 *           defer></script>
 *
 * O widget injeta um botão flutuante no canto inferior direito. Clicar abre uma
 * janela de chat que dá stream de respostas do backend (Cloudflare Worker).
 *
 * Captura de lead: se o Claude perguntar dados (nome/WhatsApp), o widget
 * detecta padrões simples nas mensagens do usuário e envia ao Worker para
 * registrar no CRM do Rotina Diária.
 */
(() => {
  const script = document.currentScript;
  const ENDPOINT = script?.dataset.endpoint || "/api/chat";
  const SESSION = crypto.randomUUID();

  const css = `
  .fz-chat-btn{position:fixed;bottom:24px;right:24px;width:56px;height:56px;border-radius:50%;
    background:#0a2540;color:#fff;border:0;box-shadow:0 4px 16px rgba(0,0,0,.2);cursor:pointer;
    font-size:24px;z-index:2147483646;display:flex;align-items:center;justify-content:center;
    transition:transform .2s}
  .fz-chat-btn:hover{transform:scale(1.05)}
  .fz-chat-win{position:fixed;bottom:96px;right:24px;width:380px;max-width:calc(100vw - 32px);
    height:560px;max-height:calc(100vh - 120px);background:#fff;border-radius:12px;
    box-shadow:0 12px 40px rgba(0,0,0,.25);display:none;flex-direction:column;overflow:hidden;
    z-index:2147483647;font-family:-apple-system,system-ui,Segoe UI,Roboto,sans-serif}
  .fz-chat-win.open{display:flex}
  .fz-chat-hd{background:#0a2540;color:#fff;padding:14px 16px;display:flex;justify-content:space-between;align-items:center}
  .fz-chat-hd b{font-size:15px}
  .fz-chat-hd small{opacity:.8;font-size:12px}
  .fz-chat-close{background:none;border:0;color:#fff;font-size:20px;cursor:pointer}
  .fz-chat-body{flex:1;overflow-y:auto;padding:16px;background:#f8fafb;display:flex;flex-direction:column;gap:10px}
  .fz-msg{max-width:85%;padding:10px 13px;border-radius:14px;font-size:14px;line-height:1.45;white-space:pre-wrap;word-wrap:break-word}
  .fz-msg.user{align-self:flex-end;background:#0a2540;color:#fff;border-bottom-right-radius:4px}
  .fz-msg.bot{align-self:flex-start;background:#fff;color:#111;border:1px solid #e2e8ef;border-bottom-left-radius:4px}
  .fz-typing{align-self:flex-start;padding:10px 13px;color:#888;font-style:italic;font-size:13px}
  .fz-chat-ft{padding:12px;background:#fff;border-top:1px solid #e2e8ef;display:flex;gap:8px}
  .fz-chat-ft input{flex:1;padding:10px 12px;border:1px solid #d1d9e2;border-radius:8px;font-size:14px;outline:none}
  .fz-chat-ft input:focus{border-color:#0a2540}
  .fz-chat-ft button{background:#0a2540;color:#fff;border:0;padding:0 16px;border-radius:8px;cursor:pointer;font-weight:600}
  .fz-chat-ft button:disabled{opacity:.5;cursor:not-allowed}
  .fz-intro{font-size:13px;color:#4a5568;padding:10px 13px;background:#eef3f8;border-radius:10px;line-height:1.5}
  `;
  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  const btn = document.createElement("button");
  btn.className = "fz-chat-btn";
  btn.innerHTML = "💬";
  btn.setAttribute("aria-label", "Abrir chat jurídico");
  document.body.appendChild(btn);

  const win = document.createElement("div");
  win.className = "fz-chat-win";
  win.innerHTML = `
    <div class="fz-chat-hd">
      <div><b>Fratazzi Advogados</b><br><small>Recepção virtual · resposta imediata</small></div>
      <button class="fz-chat-close" aria-label="Fechar">✕</button>
    </div>
    <div class="fz-chat-body">
      <div class="fz-intro">Oi! Eu sou a recepção virtual da <b>Fratazzi Advogados</b>. Posso tirar dúvidas jurídicas, explicar leis e marcar uma conversa com um advogado. Em que posso ajudar?</div>
    </div>
    <div class="fz-chat-ft">
      <input type="text" placeholder="Digite sua mensagem..." maxlength="800">
      <button type="button">Enviar</button>
    </div>
  `;
  document.body.appendChild(win);

  const body = win.querySelector(".fz-chat-body");
  const input = win.querySelector("input");
  const sendBtn = win.querySelector(".fz-chat-ft button");

  btn.onclick = () => {
    win.classList.toggle("open");
    if (win.classList.contains("open")) input.focus();
  };
  win.querySelector(".fz-chat-close").onclick = () => win.classList.remove("open");

  const messages = [];
  let lead = {};

  function addMsg(role, text) {
    const el = document.createElement("div");
    el.className = `fz-msg ${role}`;
    el.textContent = text;
    body.appendChild(el);
    body.scrollTop = body.scrollHeight;
    return el;
  }

  function extractLead(text) {
    const phone = text.match(/(?:\+?55\s?)?\(?(\d{2})\)?\s?9?\d{4}[-\s]?\d{4}/);
    const email = text.match(/[\w.+-]+@[\w-]+\.[\w.-]+/);
    if (phone) lead.telefone = phone[0];
    if (email) lead.email = email[0];
    // nome: heurística — "meu nome é X" ou "sou X"
    const nm = text.match(/(?:meu nome (?:é|eh)|me chamo|sou (?:o|a))\s+([A-ZÁÀÂÃÉÊÍÓÔÕÚÇ][a-záàâãéêíóôõúç]+(?:\s+[A-ZÁÀÂÃÉÊÍÓÔÕÚÇ][a-záàâãéêíóôõúç]+)+)/);
    if (nm) lead.nome = nm[1];
  }

  async function send() {
    const text = input.value.trim();
    if (!text) return;
    addMsg("user", text);
    input.value = "";
    sendBtn.disabled = true;

    messages.push({ role: "user", content: text });
    extractLead(text);

    const typing = document.createElement("div");
    typing.className = "fz-typing";
    typing.textContent = "digitando...";
    body.appendChild(typing);
    body.scrollTop = body.scrollHeight;

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages, session: SESSION, lead }),
      });

      if (!res.ok) throw new Error("backend indisponível: " + res.status);

      const json = await res.json();
      const resposta = (json && json.resposta) ? String(json.resposta).trim() : "";

      typing.remove();
      if (resposta) {
        addMsg("bot", resposta);
        messages.push({ role: "assistant", content: resposta });
      } else {
        addMsg("bot", "Desculpe, não consegui responder agora. Pode escrever direto para (11) 9 9697-1170?");
      }
    } catch (err) {
      typing.remove();
      addMsg("bot", "Conexão instável. Escreva para (11) 9 9697-1170 ou juridico@fratazziadvogados.com.br que a equipe responde rápido.");
    } finally {
      sendBtn.disabled = false;
      input.focus();
    }
  }

  sendBtn.onclick = send;
  input.addEventListener("keydown", e => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  });
})();
