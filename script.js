// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Terminal typing effect
const commands = [
  'sudo apt-get update',
  'ls -la',
  'cd ~/projetos',
  'git status',
  'python3 script.py',
  'htop',
  'systemctl status nginx'
];
let i = 0;
const typedEl = document.getElementById('typed');

function typeCommand() {
  if (!typedEl) return;
  typedEl.textContent = '';
  let j = 0;
  const cmd = commands[i];
  const interval = setInterval(() => {
    typedEl.textContent += cmd[j];
    j++;
    if (j >= cmd.length) {
      clearInterval(interval);
      i = (i + 1) % commands.length;
      setTimeout(typeCommand, 2000);
    }
  }, 100);
}
typeCommand();

// Neon particles
const canvas = document.getElementById('neonCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for(let i=0;i<100;i++){
  particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*2+1,dx:(Math.random()-0.5)*1.5,dy:(Math.random()-0.5)*1.5});
}
function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle='rgba(0,255,255,0.7)';
    ctx.fill();
    p.x+=p.dx;
    p.y+=p.dy;
    if(p.x<0||p.x>canvas.width)p.dx*=-1;
    if(p.y<0||p.y>canvas.height)p.dy*=-1;
  });
  requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
