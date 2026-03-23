/* global document */
const content = {
  brand: 'IEER',
  badge: 'Instalações elétricas e energias renováveis',
  headline: 'Excelência técnica em diagnóstico, execução e manutenção elétrica.',
  subheadline:
    'A IEER atua em Cabo Verde com intervenções técnicas para residências e empresas, com foco em segurança, estabilidade e eficiência energética.',
  primaryCta: 'Agendar reunião de 15 minutos',
  finalCtaTitle: 'Vamos fechar os próximos passos do seu projeto em 15 minutos?',
  finalCtaText: 'Fale connosco no WhatsApp e receba direção técnica para decidir com segurança.',
  contactCta: 'Agendar reunião com a IEER',
  contactLine: 'Sr. Atlano - Atendimento directo: +238 981 26 46',
  phoneNumber: '+2389812646',
  whatsappNumber: '2389812646',
  whatsappMessage:
    'Olá, Sr. Atlano. Pretendo agendar uma reunião de 15 minutos para avaliar o meu projeto elétrico.',
  footer: 'IEER - Instalações Elétricas e Energias Renováveis',
  highlights: [
    'Diagnóstico orientado por prioridade técnica e risco real.',
    'Proposta executável com âmbito, prazo e investimento definidos.',
    'Execução acompanhada até validação final da intervenção.',
  ],
  problems: [
    {
      title: 'Quebras de energia e interrupções',
      text: 'Avarias recorrentes afetam produção, atendimento e credibilidade da operação.',
    },
    {
      title: 'Instalação desatualizada e insegura',
      text: 'Sobrecarga, aquecimento e proteção inadequada aumentam risco de danos e incidentes.',
    },
    {
      title: 'Fatura elevada e baixa eficiência',
      text: 'Consumo sem controlo e sem estratégia técnica reduz a margem do negócio.',
    },
  ],
  solutions: [
    {
      title: 'Diagnóstico técnico no local',
      text: 'Mapeamos riscos, gargalos e oportunidades para definir prioridades com critério técnico.',
    },
    {
      title: 'Projeto e proposta objetiva',
      text: 'Recebe uma proposta directa com solução recomendada, prazo e investimento.',
    },
    {
      title: 'Execução e validação final',
      text: 'Implementação com testes para garantir estabilidade, segurança e desempenho.',
    },
    {
      title: 'Suporte de continuidade',
      text: 'Acompanhamento pós-serviço para reduzir novas paragens e manter a operação estável.',
    },
  ],
  credentials: [
    {
      title: 'Diagnóstico e validação técnica',
      text: 'Cada intervenção parte de diagnóstico objectivo, com validação final após execução.',
    },
    {
      title: 'Critério de segurança elétrica',
      text: 'Prioridade total para reduzir risco operacional, sobrecarga e avarias recorrentes.',
    },
    {
      title: 'Escopo e investimento transparentes',
      text: 'Proposta formal com âmbito, prazo e investimento definidos antes da execução.',
    },
  ],
  coverage: [
    {
      title: 'Atendimento local em Cabo Verde',
      text: 'Projetos residenciais, comerciais e de eficiência energética, conforme viabilidade técnica.',
    },
    {
      title: 'Escopo atendido',
      text: 'Diagnóstico, adequação elétrica, manutenção técnica e soluções de energia renovável.',
    },
    {
      title: 'Escopo fora de prioridade',
      text: 'Projetos fora da zona de atendimento imediato são avaliados mediante agenda técnica.',
    },
  ],
  steps: [
    {
      title: '1. Reunião curta (15 min)',
      text: 'Entendemos o cenário, urgência e objetivo do projeto com perguntas diretas.',
    },
    {
      title: '2. Diagnóstico e plano',
      text: 'Consolidamos prioridades e definimos proposta com escopo, prazo e investimento.',
    },
    {
      title: '3. Execução com validação',
      text: 'Implementamos e validamos para entregar segurança elétrica e previsibilidade.',
    },
  ],
  proof: [
    {
      title: 'Requalificação elétrica residencial',
      text: 'Atualização de quadro e reorganização de circuitos para aumentar segurança e estabilidade diária.',
    },
    {
      title: 'Adequação elétrica de espaço comercial',
      text: 'Correção de sobrecargas e reforço técnico para reduzir interrupções e proteger equipamentos.',
    },
    {
      title: 'Projeto de eficiência energética',
      text: 'Intervenção orientada para reduzir desperdício e melhorar previsibilidade de custos energéticos.',
    },
  ],
  offer: [
    {
      title: 'Diagnóstico inicial',
      text: 'Levantamento técnico dos riscos e prioridades no local.',
    },
    {
      title: 'Plano de ação',
      text: 'Recebe direção objectiva: o que fazer primeiro e com qual impacto esperado.',
    },
    {
      title: 'Próximo passo claro',
      text: 'Após o diagnóstico, a execução é alinhada com âmbito, prazo e investimento definidos.',
    },
  ],
  faq: [
    {
      title: 'Quanto tempo demora para começar?',
      text: 'Após a reunião inicial e validação do âmbito, o início depende da agenda técnica e da prioridade do risco.',
    },
    {
      title: 'Vocês atendem urgência?',
      text: 'Sim. Casos com risco elétrico ou interrupção de operação entram como prioridade de avaliação.',
    },
    {
      title: 'Como é definido o investimento?',
      text: 'Com base no diagnóstico técnico, materiais necessários, complexidade e prazo de execução.',
    },
  ],
  workGallery: [
    { title: 'Trabalho IEER 01', image: 'assets/trabalhos/trabalho-01.webp' },
    { title: 'Trabalho IEER 02', image: 'assets/trabalhos/trabalho-02.webp' },
    { title: 'Trabalho IEER 03', image: 'assets/trabalhos/trabalho-03.webp' },
    { title: 'Trabalho IEER 04', image: 'assets/trabalhos/trabalho-04.webp' },
    { title: 'Trabalho IEER 05', image: 'assets/trabalhos/trabalho-05.webp' },
    { title: 'Trabalho IEER 06', image: 'assets/trabalhos/trabalho-06.webp' },
    { title: 'Trabalho IEER 07', image: 'assets/trabalhos/trabalho-07.webp' },
    { title: 'Trabalho IEER 08', image: 'assets/trabalhos/trabalho-08.webp' },
    { title: 'Trabalho IEER 09', image: 'assets/trabalhos/trabalho-09.webp' },
    { title: 'Trabalho IEER 10', image: 'assets/trabalhos/trabalho-10.webp' },
    { title: 'Trabalho IEER 11', image: 'assets/trabalhos/trabalho-11.webp' },
    { title: 'Trabalho IEER 12', image: 'assets/trabalhos/trabalho-12.webp' },
    { title: 'Trabalho IEER 13', image: 'assets/trabalhos/trabalho-13.webp' },
    { title: 'Trabalho IEER 14', image: 'assets/trabalhos/trabalho-14.webp' },
    { title: 'Trabalho IEER 15', image: 'assets/trabalhos/trabalho-15.webp' },
    { title: 'Trabalho IEER 16', image: 'assets/trabalhos/trabalho-16.webp' },
    { title: 'Trabalho IEER 17', image: 'assets/trabalhos/trabalho-17.webp' },
    { title: 'Trabalho IEER 18', image: 'assets/trabalhos/trabalho-18.webp' },
    { title: 'Trabalho IEER 19', image: 'assets/trabalhos/trabalho-19.webp' },
  ],
};

function setText(key, value) {
  const el = document.querySelector(`[data-text="${key}"]`);
  if (el) el.textContent = value;
}

function renderList(id, items) {
  const root = document.getElementById(id);
  if (!root) return;
  root.innerHTML = '';
  items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    root.appendChild(li);
  });
}

function renderCards(id, items) {
  const root = document.getElementById(id);
  if (!root) return;
  root.innerHTML = '';
  const fragment = document.createDocumentFragment();
  items.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'card';
    const image = item.image
      ? `<img class="card-media" src="${item.image}" alt="${item.title}" loading="lazy" />`
      : '';
    const text = item.text ? `<p>${item.text}</p>` : '';
    card.innerHTML = `${image}<h3>${item.title}</h3>${text}`;
    fragment.appendChild(card);
  });
  root.appendChild(fragment);
}

function renderSteps() {
  const root = document.getElementById('steps-list');
  if (!root) return;
  root.innerHTML = '';

  content.steps.forEach((step, index) => {
    const row = document.createElement('article');
    row.className = 'step';
    row.innerHTML = `
      <div class="step-index">${index + 1}</div>
      <div>
        <h3>${step.title}</h3>
        <p>${step.text}</p>
      </div>
    `;
    root.appendChild(row);
  });
}

function renderFaq() {
  const root = document.getElementById('faq-list');
  if (!root) return;
  root.innerHTML = '';

  content.faq.forEach((item, index) => {
    const row = document.createElement('article');
    row.className = 'step';
    row.innerHTML = `
      <div class="step-index">${index + 1}</div>
      <div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
    `;
    root.appendChild(row);
  });
}

function setupLeadForm() {
  const form = document.getElementById('lead-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('lead-name')?.value?.trim() || '';
    const phone = document.getElementById('lead-phone')?.value?.trim() || '';
    const need = document.getElementById('lead-need')?.value?.trim() || '';

    const message = [
      'Olá, Sr. Atlano.',
      'Quero pedir um diagnóstico inicial com a IEER.',
      `Nome: ${name}`,
      `Telefone: ${phone}`,
      `Necessidade: ${need}`,
    ].join('\n');

    const url = `https://wa.me/${content.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
}

function enableHorizontalDrag(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const originalCards = Array.from(el.children);
  if (originalCards.length < 2) return;

  // Build 3 segments so we can jump back to middle segment and fake an infinite loop.
  const before = originalCards.map((card) => card.cloneNode(true));
  const after = originalCards.map((card) => card.cloneNode(true));
  before.forEach((card) => el.insertBefore(card, el.firstChild));
  after.forEach((card) => el.appendChild(card));

  const segmentWidth = el.scrollWidth / 3;
  const startAtMiddle = () => {
    el.scrollLeft = segmentWidth;
  };
  startAtMiddle();

  const wrapIfNeeded = () => {
    if (el.scrollLeft < segmentWidth * 0.2) {
      el.scrollLeft += segmentWidth;
    } else if (el.scrollLeft > segmentWidth * 1.8) {
      el.scrollLeft -= segmentWidth;
    }
  };

  let isDown = false;
  let startX = 0;
  let startScroll = 0;
  let pointerId = null;

  const startDrag = (pageX, id = null) => {
    isDown = true;
    pointerId = id;
    startX = pageX;
    startScroll = el.scrollLeft;
    el.style.scrollBehavior = 'auto';
  };

  const stopDrag = () => {
    isDown = false;
    pointerId = null;
  };

  const moveDrag = (pageX) => {
    if (!isDown) return;
    const delta = pageX - startX;
    el.scrollLeft = startScroll - delta;
    wrapIfNeeded();
  };

  el.addEventListener('pointerdown', (event) => {
    startDrag(event.pageX, event.pointerId);
    if (event.pointerType === 'touch') {
      el.setPointerCapture(event.pointerId);
    }
  });

  el.addEventListener('pointermove', (event) => {
    if (!isDown) return;
    if (pointerId !== null && event.pointerId !== pointerId) return;
    event.preventDefault();
    moveDrag(event.pageX);
  });

  el.addEventListener('pointerup', stopDrag);
  el.addEventListener('pointercancel', stopDrag);
  el.addEventListener('mouseleave', stopDrag);

  el.addEventListener('scroll', wrapIfNeeded);
}

function init() {
  setText('brand', content.brand);
  setText('badge', content.badge);
  setText('headline', content.headline);
  setText('subheadline', content.subheadline);
  setText('primaryCta', content.primaryCta);
  setText('finalCtaTitle', content.finalCtaTitle);
  setText('finalCtaText', content.finalCtaText);
  setText('contactCta', content.contactCta);
  setText('footer', content.footer);

  const contactLine = document.getElementById('contact-line');
  if (contactLine) contactLine.textContent = content.contactLine;

  const waUrl = `https://wa.me/${content.whatsappNumber}?text=${encodeURIComponent(content.whatsappMessage)}`;
  document.querySelectorAll('.wa-link').forEach((el) => {
    el.setAttribute('href', waUrl);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener noreferrer');
  });

  const callLink = document.getElementById('call-link');
  if (callLink) callLink.setAttribute('href', `tel:${content.phoneNumber}`);

  renderList('hero-highlights', content.highlights);
  renderCards('problems-list', content.problems);
  renderCards('solutions-list', content.solutions);
  renderCards('credentials-list', content.credentials);
  renderCards('coverage-list', content.coverage);
  renderCards('proof-list', content.proof);
  renderCards('offer-list', content.offer);
  renderCards('work-gallery', content.workGallery);
  enableHorizontalDrag('work-gallery');
  renderSteps();
  renderFaq();
  setupLeadForm();
}

document.addEventListener('DOMContentLoaded', init);
