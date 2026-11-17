  // marquee content
  const words = ["Venture Building","Marketing","Negotiation","Strategy","Brand Strategy","GTM Strategy","Influencer Marketing","Chennai, India"];
  const track = document.getElementById('marqueeTrack');
  track.innerHTML = [...words,...words].map(w=>`<span>${w}</span>`).join('');

  // mobile nav
  const toggle = document.getElementById('navtoggle');
  const links = document.getElementById('navlinks');
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

  // carousel
  const ctrack = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  function cardWidth(){
    const card = ctrack.querySelector('.venture-card');
    const style = getComputedStyle(ctrack);
    return card.getBoundingClientRect().width + parseFloat(style.gap || 24);
  }
  prevBtn.addEventListener('click', () => ctrack.scrollBy({left:-cardWidth(), behavior:'smooth'}));
  nextBtn.addEventListener('click', () => ctrack.scrollBy({left:cardWidth(), behavior:'smooth'}));
  document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowRight') ctrack.scrollBy({left:cardWidth(), behavior:'smooth'});
    if(e.key === 'ArrowLeft') ctrack.scrollBy({left:-cardWidth(), behavior:'smooth'});
  });

  // reveal + skill bars on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('show');
        e.target.querySelectorAll('.skill-fill').forEach(f => { f.style.width = f.dataset.w + '%'; });
      }
    });
  }, {threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
