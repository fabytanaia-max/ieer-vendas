/* global document */
const content = {
  brand: 'IEER',
  badge: 'Instalações Elétricas e Energias Renováveis',
  headline: 'A energia certa para proteger o seu espaço e reduzir custos.',
  subheadline:
    'Com a IEER, você tem instalações elétricas seguras, energia renovável bem dimensionada e execução profissional do início ao fim.',
  primaryCta: 'Quero um orçamento técnico',
  finalCtaTitle: 'Vamos desenhar a melhor solução para o seu caso?',
  finalCtaText: 'Receba uma proposta clara, com escopo, prazo e investimento, sem surpresas.',
  contactCta: 'Falar com a IEER no WhatsApp',
  contactLine: 'Sr. Atlano - Atendimento direto: +238 981 26 46',
  whatsappNumber: '2389812646',
  whatsappMessage: 'Olá, Sr. Atlano. Gostaria de pedir um orçamento técnico da IEER.',
  footer: 'IEER - Instalações Elétricas e Energias Renováveis',
  highlights: [
    'Mais segurança elétrica para residências e negócios.',
    'Menor desperdício de energia e melhor eficiência no consumo.',
    'Acompanhamento técnico para evitar falhas e paragens.',
  ],
  services: [
    {
      title: 'Instalações elétricas residenciais',
      text: 'Montagem, renovação e organização de circuitos para garantir segurança e estabilidade no dia a dia.',
    },
    {
      title: 'Instalações comerciais',
      text: 'Soluções para lojas e empresas, com infraestrutura preparada para o crescimento da operação.',
    },
    {
      title: 'Energia solar fotovoltaica',
      text: 'Projeto e implementação com foco em retorno financeiro e autonomia energética.',
    },
    {
      title: 'Manutenção e diagnóstico',
      text: 'Inspeção técnica, identificação de riscos e plano de ação para evitar avarias recorrentes.',
    },
  ],
  benefits: [
    {
      title: 'Execução com critério técnico',
      text: 'Cada intervenção segue uma lógica de segurança, desempenho e durabilidade.',
    },
    {
      title: 'Orçamento transparente',
      text: 'Você sabe, antecipadamente, o que será feito, quanto custa e quanto tempo leva.',
    },
    {
      title: 'Eficiência com foco em poupança',
      text: 'As soluções são pensadas para reduzir consumo, sem comprometer conforto e operação.',
    },
    {
      title: 'Suporte após a entrega',
      text: 'A IEER acompanha o pós-serviço para garantir funcionamento confiável.',
    },
  ],
  steps: [
    {
      title: '1. Visita e diagnóstico',
      text: 'Levantamos as necessidades reais do local e os pontos de risco ou melhoria.',
    },
    {
      title: '2. Proposta técnica',
      text: 'Apresentamos a solução recomendada, com materiais, prazo de execução e investimento.',
    },
    {
      title: '3. Execução e testes',
      text: 'Implementamos o serviço com validação técnica, para garantir segurança e desempenho.',
    },
    {
      title: '4. Entrega e acompanhamento',
      text: 'Entregamos com orientação prática e suporte para manter o sistema estável.',
    },
  ],
  projects: [
    {
      title: 'Requalificação elétrica residencial',
      text: 'Atualização completa para reduzir riscos, melhorar a distribuição e suportar novos equipamentos.',
    },
    {
      title: 'Adequação elétrica de espaço comercial',
      text: 'Reforço de capacidade e organização técnica para operar sem interrupções por sobrecarga.',
    },
    {
      title: 'Implementação de energia solar',
      text: 'Sistema pensado para reduzir a fatura mensal e aumentar a previsibilidade de custos.',
    },
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
  items.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `<h3>${item.title}</h3><p>${item.text}</p>`;
    root.appendChild(card);
  });
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

  renderList('hero-highlights', content.highlights);
  renderCards('services-list', content.services);
  renderCards('benefits-list', content.benefits);
  renderCards('projects-list', content.projects);
  renderSteps();
}

document.addEventListener('DOMContentLoaded', init);
