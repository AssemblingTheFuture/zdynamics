document.addEventListener('DOMContentLoaded', () => {

    // ======================================================
    // 1. EFECTO TYPEWRITER (Solo corre si existe el elemento)
    // ======================================================
    const typeWriterElement = document.getElementById('typewriter');
    if (typeWriterElement) {
        const textPart1 = "THE FUTURE IS"; 
        const textPart2 = "ROBOTICS";
        let i = 0;

        function typeWriter() {
            const cursor = '<span class="cursor cursor-contrast">|</span>';
            const totalLength = textPart1.length + textPart2.length;

            if (i < textPart1.length) {
                typeWriterElement.innerHTML = textPart1.substring(0, i + 1) + cursor;
            } else if (i < totalLength) {
                let part2Index = i - textPart1.length;
                typeWriterElement.innerHTML = textPart1 + '<br>' + 
                                              '<span class="highlight">' + textPart2.substring(0, part2Index + 1) + '</span>' + 
                                              cursor;
            } else {
                typeWriterElement.innerHTML = textPart1 + '<br>' + 
                                              '<span class="highlight">' + textPart2 + '</span>' + 
                                              cursor;
                return; 
            }
            i++;
            setTimeout(typeWriter, 100); 
        }
        setTimeout(typeWriter, 100);
    }

    // ======================================================
    // 2. PARTÍCULAS (Configuración Global)
    // ======================================================
    // Verificamos si la librería cargó correctamente
    if (typeof tsParticles !== 'undefined') {
        tsParticles.load("tsparticles", {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#00D4FF" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#00D4FF", opacity: 0.2, width: 1 },
                move: { enable: true, speed: 1.5 }
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
                modes: { grab: { distance: 140, line_linked: { opacity: 1 } }, push: { particles_nb: 4 } }
            },
            retina_detect: true
        });
    }

    // ======================================================
    // 3. NAVEGACIÓN (Sticky y Móvil)
    // ======================================================
    const navbar = document.getElementById('main-nav');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) navbar.classList.add('sticky');
            else navbar.classList.remove('sticky');
        });
    }

    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('open');
        });

        // Cerrar menú al dar clic en enlaces
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('open'); // Corrección visual del icono
            });
        });
    }

    // ======================================================
    // 4. CONTADORES (Conectado a API Udemy vía Netlify)
    // ======================================================
    let counterSection = document.querySelector('.metrics-section');
    if(counterSection) {
        
        // Función asíncrona para obtener datos reales
        const fetchMetrics = async () => {
            try {
                // Llamamos a TU función de Netlify (definida en netlify.toml como /api/...)
                const response = await fetch('/api/main'); 
                const data = await response.json();
                
                if (data && data.total_students) {
                    console.log("Estudiantes en tiempo real:", data.total_students);
                    return data.total_students;
                }
            } catch (error) {
                console.warn("No se pudo conectar con Udemy, usando datos locales.", error);
            }
            return 4800; // Fallback: Si falla la API, mostramos este número
        };

        // Lógica de animación
        const startAnimation = async () => {
            // 1. Obtenemos el número real antes de animar
            const realStudentCount = await fetchMetrics();

            const counters = [
                { id: 'count-countries', target: 60 },
                { id: 'count-students', target: realStudentCount }, // ¡Ahora es dinámico!
                { id: 'count-years', target: 9 }
            ];
            const duration = 2000; 
            const frameDuration = 20; 

            counters.forEach(counter => {
                const element = document.getElementById(counter.id);
                if (!element) return;
                
                const target = counter.target;
                const totalFrames = duration / frameDuration;
                const increment = target / totalFrames;
                let currentCount = 0;

                const updateCount = () => {
                    currentCount += increment;
                    if (currentCount < target) {
                        element.innerText = Math.ceil(currentCount);
                        setTimeout(updateCount, frameDuration);
                    } else {
                        // Formato bonito: si son miles agrega la "k" o el "+"
                        element.innerText = "+" + target; 
                    }
                };
                updateCount();
            });
        };

        // Intersection Observer: Dispara la función cuando el usuario ve la sección
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startAnimation(); // Ejecutamos la nueva función async
                    observer.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px', threshold: 0.5 });
        observer.observe(counterSection);
    }

    // ======================================================
    // 5. CARRUSEL 3D (CRÍTICO: "IF TRACK EXISTE")
    // ======================================================
    // Aquí estaba el error. Si no hay track, todo el JS moría.
    const track = document.getElementById('track');
    
    if (track) { 
        let cards = Array.from(document.querySelectorAll('.carousel-card'));
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        // --- FASE 1: ALEATORIEDAD ---
        function shuffleCards() {
            for (let i = cards.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [cards[i], cards[j]] = [cards[j], cards[i]];
            }
            cards.forEach(card => track.appendChild(card));
        }

        // Solo barajamos si hay espacio suficiente (Escritorio)
        if (window.innerWidth > 768) {
            shuffleCards();
        }

        // --- FASE 2: LÓGICA 3D ---
        let centerIndex = 0; 

        const updateCarousel = () => {
            // En móvil desactivamos la lógica 3D para evitar glitches
            if (window.innerWidth <= 768) return; 

            const total = cards.length;

            cards.forEach((card, index) => {
                let distance = (index - centerIndex) % total;
                if (distance < -total / 2) distance += total;
                if (distance > total / 2) distance -= total;

                const absDist = Math.abs(distance);
                
                // Ocultar tarjetas muy lejanas
                if (absDist > 2) {
                    card.style.opacity = 0;
                    card.style.pointerEvents = 'none';
                    card.style.transform = `translateX(0) scale(0)`;
                } else {
                    const scale = Math.max(1 - (absDist * 0.15), 0.6); 
                    const opacity = Math.max(1 - (absDist * 0.3), 0);
                    const zIndex = 100 - absDist; 
                    const translateX = distance * 200;

                    card.style.transform = `translateX(${translateX}px) scale(${scale})`;
                    card.style.zIndex = zIndex;
                    card.style.opacity = opacity;
                    
                    // Permitimos interacción en todas para poder hacer clic y rotar
                    card.style.pointerEvents = 'auto'; 
                    card.style.filter = (distance === 0) ? 'none' : 'blur(2px) grayscale(40%)';
                    card.style.cursor = 'pointer'; 
                }
            });
        };

        // Event Listeners Botones (Con protección por si no existen)
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                centerIndex = (centerIndex + 1) % cards.length;
                updateCarousel();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                centerIndex = (centerIndex - 1 + cards.length) % cards.length;
                updateCarousel();
            });
        }

        // --- FASE 3: CLIC INTELIGENTE ---
        cards.forEach((card) => {
            card.addEventListener('click', () => {
                const currentIndex = cards.indexOf(card);
                let distance = (currentIndex - centerIndex) % cards.length;
                if (distance < -cards.length/2) distance += cards.length;
                if (distance > cards.length/2) distance -= cards.length;

                if (distance === 0) {
                    // SI ESTÁ EN EL CENTRO -> ABRIR URL
                    const url = card.getAttribute('data-url');
                    if (url) {
                        card.style.transform += " scale(0.95)"; // Efecto "Press"
                        setTimeout(() => {
                            window.location.href = url;
                        }, 150);
                    }
                } else {
                    // SI ESTÁ AL LADO -> ROTAR
                    centerIndex = currentIndex;
                    updateCarousel();
                }
            });
        });

        // Inicializar
        updateCarousel();

        // Responsive Reset
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 768) {
                cards.forEach(card => {
                    // Limpiar estilos inline para que CSS tome el control en móvil
                    card.style.transform = '';
                    card.style.opacity = '';
                    card.style.zIndex = '';
                    card.style.filter = '';
                    card.style.pointerEvents = 'auto';
                    
                    // En móvil, el clic siempre abre
                    card.onclick = function() {
                        const url = this.getAttribute('data-url');
                        if(url) window.location.href = url;
                    };
                });
            } else {
                cards.forEach(c => c.onclick = null); // Quitar el onclick inline
                updateCarousel();
            }
        });
    } // CIERRE DEL IF (TRACK)

    // ======================================================
    // 6. ENVÍO DE FORMULARIO (Ahora protegido y robusto)
    // ======================================================
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.querySelector('.submit-btn');

    // IDs de tu cuenta EmailJS
    const serviceID = 'service_66tnv1p';
    const templateID = 'template_dy4961m';

    // Solo ejecutamos esto si el formulario existe en la página actual
    if (contactForm && submitBtn) {
        
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita recargar la página

            // Captura de datos
            const nombre = this.user_name.value;
            const correo = this.user_email.value;
            const mensaje = this.message.value;
            
            // Objeto de parámetros para la plantilla
            const templateParams = {
                name: nombre,
                email: correo,
                subject: "Nuevo mensaje de " + nombre, 
                message: mensaje
            };

            // Feedback visual: Cargando
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = 'ENVIANDO... <i class="fa-solid fa-spinner fa-spin"></i>';

            // Envío
            emailjs.send(serviceID, templateID, templateParams)
                .then(function() {
                    // ÉXITO
                    submitBtn.innerHTML = '¡ENVIADO! <i class="fa-solid fa-check"></i>';
                    submitBtn.style.background = '#00FF88'; // Verde
                    submitBtn.style.borderColor = '#00FF88'; 
                    submitBtn.style.color = '#0b1120';       
                    submitBtn.style.boxShadow = '0 0 15px rgba(0, 255, 136, 0.5)';
                    
                    contactForm.reset(); // Limpiar campos
                    
                    // Restaurar botón
                    setTimeout(() => {
                        submitBtn.innerHTML = originalBtnText;
                        submitBtn.style.background = 'transparent';
                        submitBtn.style.borderColor = ''; // Regresa al CSS original
                        submitBtn.style.color = '#00D4FF';
                        submitBtn.style.boxShadow = '';
                    }, 3000);
                }, function(error) {
                    // ERROR
                    console.error('Error al enviar:', error);
                    submitBtn.innerHTML = 'ERROR AL ENVIAR <i class="fa-solid fa-triangle-exclamation"></i>';
                    submitBtn.style.borderColor = 'red';
                    submitBtn.style.color = 'red';
                    
                    alert('Hubo un problema al enviar tu mensaje. Por favor intenta más tarde.');
                });
        });
    }

    /* =========================================
        SISTEMA DE AMBIENTES Y PARTÍCULAS
        ========================================= */

    // 1. Detectar el ambiente actual desde el HTML
    const body = document.body;
    const currentEnv = body.getAttribute('data-env') || 'standard';
        
    // Si no existe el contenedor, no hacemos nada (evita errores)
    const container = document.getElementById('tsparticles');
    if (!container) return;

    // 2. Definir las configuraciones (Perfiles)
    const configs = {
        // PERFIL 1: DEFAULT (Index - Tus partículas actuales)
        'standard': {
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } },
                    color: { value: "#00D4FF" },
                    shape: { type: "circle" },
                    opacity: { value: 0.5, random: true },
                    size: { value: 3, random: true },
                    line_linked: { enable: true, distance: 150, color: "#00D4FF", opacity: 0.2, width: 1 },
                    move: { enable: true, speed: 1.5 }
                },
                interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
                modes: { grab: { distance: 140, line_linked: { opacity: 1 } }, push: { particles_nb: 7 } }
                },
                retina_detect: true
        },

        // PERFIL 2: WARP (Corregido: Avance Frontal Suave y Continuo)
        'warp': {
            particles: {
                // Aumentamos el número para evitar "huecos" cuando viajan rápido
                number: { value: 120, density: { enable: true, value_area: 777 } },
                
                color: { value: ["#ffffff", "#0b1120"] }, 
                
                shape: { type: "circle" },

                // Empiezan en 0 (invisibles en el centro) y aparecen gradualmente.
                // Esto oculta el punto de origen y da sensación de profundidad.
                opacity: { 
                    value: 1, 
                    random: true, 
                    anim: { 
                        enable: true, 
                        speed: 0.7, 
                        opacity_min: 0, // Nacen invisibles
                        sync: false 
                    } 
                },
                
                // TRUCO DE TAMAÑO: Crecen al acercarse (Perspective Projection)
                size: { 
                    value: 3, 
                    random: true, // Variación natural
                    anim: { 
                        enable: true, 
                        speed: 0.1, 
                        size_min: 0, // Nacen microscópicas
                        sync: false 
                    } 
                },
                
                line_linked: { enable: false }, // Limpieza total
                
                move: {
                    enable: true,
                    speed: 0.7,           // Velocidad reducida para apreciación (antes 8)
                    direction: "outside", // Del centro hacia afuera
                    random: false,      // Trayectoria recta (Inercia)
                    straight: false,    
                    out_mode: "out",    // Salen y se reciclan
                    bounce: false,
                    attract: { enable: false },
                    warp: true
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: false }, // Sin distracción
                    resize: true
                }
            },
            retina_detect: true
        },

        // PERFIL 3: ORBITAL (Nosotros - Rotación y Estructura)
        'orbital': {
                particles: {
                    number: { value: 60, density: { enable: true, value_area: 800 } },
                    color: { value: ["#00D4FF", "#ffffff"] }, // Cian y Blanco
                    shape: { type: "circle" },
                    opacity: { value: 0.6 },
                    size: { value: 2 },
                    line_linked: {
                        enable: true,
                        distance: 180,
                        color: "#00d4ff", // Conexiones Cian
                        opacity: 0.2,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 0.5, // Muy lento, majestuoso
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        attract: { enable: true, rotateX: 600, rotateY: 1200 } // Efecto sutil de atracción
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: { onhover: { enable: true, mode: "grab" }, resize: true },
                    modes: { grab: { distance: 200, line_linked: { opacity: 0.5 } } }
                },
                retina_detect: true
        },

        // PERFIL 4: VOID (Investigación - Misterio y Flotación)
        'void': {
                particles: {
                    number: { value: 100, density: { enable: true, value_area: 800 } },
                    color: { value: ["#ffffff", "#0b1120"] }, 
                    shape: { type: "circle" },
                    opacity: { value: 0.7, random: true, anim: { enable: true, speed: 3, opacity_min: 0.1, sync: false } },
                    size: { value: 3, random: true },
                    line_linked: { enable: false }, // Solo polvo
                    move: {
                        enable: true,
                        speed: 0.2, // Casi estático
                        direction: "top", // Flotando suavemente hacia arriba
                        random: true,
                        straight: false,
                        out_mode: "out"
                    }
                },
                retina_detect: true
        }
    };

        // 3. Cargar la configuración seleccionada
        // Si el perfil no existe, usamos 'default' por seguridad
        const selectedConfig = configs[currentEnv] || configs['default'];
        
        if (typeof tsParticles !== 'undefined') {
            tsParticles.load("tsparticles", selectedConfig);
        } else {
            console.warn('tsParticles no está cargado. Revisa tus scripts.');
        }

});