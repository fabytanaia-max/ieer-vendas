/* global document */
const content = {
  brand: 'IEER',
  badge: 'Instalações elétricas e energias renováveis',
  headline: 'Projetamos, instalamos e corrigimos sistemas elétricos e de energias renováveis em Cabo Verde.',
  subheadline:
    'Para residências e empresas que precisam de segurança elétrica, menos falhas e menor custo de energia.',
  primaryCta: 'Pedir diagnóstico técnico no WhatsApp',
  finalCtaTitle: 'Vamos fechar os próximos passos do seu projeto em 15 minutos?',
  finalCtaText: 'Fale connosco no WhatsApp e receba direção técnica para decidir com segurança.',
  contactCta: 'Solicitar avaliação com a IEER',
  contactLine: 'Sr. Atlano - Atendimento directo: +238 981 26 46',
  phoneNumber: '+2389812646',
  whatsappNumber: '2389812646',
  whatsappMessage:
    'Olá, Sr. Atlano. Pretendo solicitar uma avaliação técnica para o meu projeto elétrico.',
  footer: 'IEER - Instalações Elétricas e Energias Renováveis',
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
  workGallery: [
    { alt: 'Registo de trabalho IEER', image: 'assets/trabalhos/trabalho-01.webp' },
    { alt: 'Registo de trabalho IEER', image: 'assets/trabalhos/trabalho-02.webp' },
    { alt: 'Registo de trabalho IEER', image: 'assets/trabalhos/trabalho-03.webp' },
    { alt: 'Registo de trabalho IEER', image: 'assets/trabalhos/trabalho-04.webp' },
    { alt: 'Registo de trabalho IEER', image: 'assets/trabalhos/trabalho-05.webp' },
    { alt: 'Registo de trabalho IEER', image: 'assets/trabalhos/trabalho-06.webp' },
    { alt: 'Registo de trabalho IEER', image: 'assets/trabalhos/trabalho-07.webp' },
    { alt: 'Registo de trabalho IEER', image: 'assets/trabalhos/trabalho-08.webp' },
    { alt: 'Registo de trabalho IEER', image: 'assets/trabalhos/trabalho-09.webp' },
    { alt: 'Registo de trabalho IEER', image: 'assets/trabalhos/trabalho-10.webp' },
    { alt: 'Registo de trabalho IEER', image: 'assets/trabalhos/trabalho-11.webp' },
    { alt: 'Registo de trabalho IEER', image: 'assets/trabalhos/trabalho-12.webp' },
    { alt: 'Registo de trabalho IEER', image: 'assets/trabalhos/trabalho-13.webp' },
    { alt: 'Registo de trabalho IEER', image: 'assets/trabalhos/trabalho-14.webp' },
    { alt: 'Registo de trabalho IEER', image: 'assets/trabalhos/trabalho-15.webp' },
    { alt: 'Registo de trabalho IEER', image: 'assets/trabalhos/trabalho-16.webp' },
    { alt: 'Registo de trabalho IEER', image: 'assets/trabalhos/trabalho-17.webp' },
    { alt: 'Registo de trabalho IEER', image: 'assets/trabalhos/trabalho-18.webp' },
    { alt: 'Registo de trabalho IEER', image: 'assets/trabalhos/trabalho-19.webp' },
  ],
};

function setText(key, value) {
  const el = document.querySelector(`[data-text="${key}"]`);
  if (el) el.textContent = value;
}

function renderCards(id, items) {
  const root = document.getElementById(id);
  if (!root) return;
  root.innerHTML = '';
  const fragment = document.createDocumentFragment();
  items.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'card';
    const isGallery = id === 'work-gallery';
    const altText = item.alt || item.title || 'Registo de trabalho IEER';
    const image = item.image
      ? `<img class="card-media" src="${item.image}" alt="${altText}" loading="lazy" />`
      : '';
    const title = !isGallery && item.title ? `<h3>${item.title}</h3>` : '';
    const text = !isGallery && item.text ? `<p>${item.text}</p>` : '';
    card.innerHTML = `${image}${title}${text}`;
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

  renderCards('problems-list', content.problems);
  renderCards('solutions-list', content.solutions);
  renderCards('work-gallery', content.workGallery);
  enableHorizontalDrag('work-gallery');
  renderSteps();
}

document.addEventListener('DOMContentLoaded', init);
