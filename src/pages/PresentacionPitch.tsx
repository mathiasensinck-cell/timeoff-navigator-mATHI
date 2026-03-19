import { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Container,
} from '@mui/material';
import {
  ArrowBack as PrevIcon,
  ArrowForward as NextIcon,
  Circle as DotIcon,
  Home as HomeIcon,
  Science as LabIcon,
  EventNote as EventLogIcon,
  Chat as ChatIcon,
} from '@mui/icons-material';

const teamMembers = [
  {
    name: 'Guillermo Sequeira',
    photo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/guille%20foto-JCAsCGuTEAMVRgRjPWDgjSQ56D46To.png',
  },
  {
    name: 'Matias Ensinck',
    photo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mATHI%20FOTO-wYD0QUwJPOyZa7r9R1toK5EA4OSo9O.jpeg',
  },
  {
    name: 'Emilia Wittenstein',
    photo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emi%20foto-brnwvJKnSWNAJTWTllwtWZOh4iX9r3.png',
  },
  {
    name: 'Luciana Lucero',
    photo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Luchi%20foto-ITOrP73YUgnwKcB5EcZwEtkcT90f1w.png',
  },
];

// Slide 1: Apertura - El Gancho (Imagen)
const Slide1Gancho = () => (
  <Box
    sx={{
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      px: 2,
    }}
  >
    <Box
      component="img"
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_urm244urm244urm2.png-7f8CncIsdKzf6Z4W5Lh8kJIrh37Gcn.jpeg"
      alt="Admin de RRHH en Colombia con problema de configuracion de vacaciones"
      crossOrigin="anonymous"
      sx={{
        maxWidth: '70%',
        maxHeight: '60vh',
        borderRadius: 3,
        boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
        objectFit: 'contain',
      }}
    />
  </Box>
);

// Slide 2: Hay problemas como estos (imagen difuminada)
const Slide2Problemas = () => (
  <Box
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      px: 3,
    }}
  >
    <Typography
      variant="h2"
      sx={{
        fontSize: { xs: '1.8rem', md: '2.5rem' },
        fontWeight: 700,
        color: '#E74444',
        textAlign: 'center',
      }}
    >
      Hay problemas como estos...
    </Typography>
    <Box
      sx={{
        maxWidth: 900,
        width: '100%',
      }}
    >
      <Box
        component="img"
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_q466uoq466uoq466%20%281%29.png-NtLkLYkNM6athM5MKP9INusIeO6SmP.jpeg"
        alt="Ejemplo de problema de soporte"
        crossOrigin="anonymous"
        sx={{
          width: '100%',
          borderRadius: 3,
          boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
        }}
      />
    </Box>
    <Typography
      variant="body1"
      sx={{
        color: 'text.secondary',
        textAlign: 'center',
        maxWidth: 600,
        fontStyle: 'italic',
      }}
    >
      Consultas que saturan al equipo de CX y que podrian resolverse con las herramientas correctas.
    </Typography>
  </Box>
);

// Slide 3: Por que importa para el negocio
const Slide3Negocio = () => (
  <Box
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      px: 3,
    }}
  >
    <Typography
      variant="h2"
      sx={{
        fontSize: { xs: '1.8rem', md: '2.5rem' },
        fontWeight: 700,
        color: '#496BE3',
        textAlign: 'center',
      }}
    >
      Por que esto importa para el negocio
    </Typography>
    <Box
      sx={{
        maxWidth: 800,
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      <Box
        sx={{
          p: 3,
          borderRadius: 3,
          bgcolor: 'rgba(73, 107, 227, 0.08)',
          borderLeft: '4px solid #496BE3',
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary', mb: 1 }}>
          El modulo mas sticky de Humand
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Los clientes que usan vacaciones y permisos son los mas comprometidos con la plataforma. Les resuelve algo muy delicado: la gestion de vacaciones de sus colaboradores.
        </Typography>
      </Box>
      <Box
        sx={{
          p: 3,
          borderRadius: 3,
          bgcolor: 'rgba(28, 163, 50, 0.08)',
          borderLeft: '4px solid #1CA332',
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary', mb: 1 }}>
          Mayor engagement = Menor churn
        </Typography>
        <Typography variant="body1" color="text.secondary">
          En un modelo SaaS, esto impacta directo en revenue.
        </Typography>
      </Box>
      <Box
        sx={{
          p: 3,
          borderRadius: 3,
          bgcolor: 'rgba(231, 68, 68, 0.08)',
          borderLeft: '4px solid #E74444',
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary', mb: 1 }}>
          Un error aca no es un problema menor
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Es friccion directa con el cliente en el modulo que mas lo retiene.
        </Typography>
      </Box>
    </Box>
  </Box>
);

// Slide 4: El Problema
const Slide4Problema = () => (
  <Box
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      px: 3,
    }}
  >
    <Typography
      variant="h2"
      sx={{
        fontSize: { xs: '1.8rem', md: '2.5rem' },
        fontWeight: 700,
        color: '#E74444',
        textAlign: 'center',
      }}
    >
      El Problema
    </Typography>
    <Typography
      variant="h5"
      sx={{
        color: 'text.secondary',
        textAlign: 'center',
        maxWidth: 700,
        mb: 2,
      }}
    >
      Configurarlo bien es complejo. Cada pais tiene reglas distintas.
    </Typography>
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
        gap: 3,
        maxWidth: 900,
      }}
    >
      <Box sx={{ p: 3, borderRadius: 3, bgcolor: 'rgba(73, 107, 227, 0.08)', textAlign: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#496BE3', mb: 1 }}>Argentina</Typography>
        <Typography variant="body2" color="text.secondary">Maneja antiguedad</Typography>
      </Box>
      <Box sx={{ p: 3, borderRadius: 3, bgcolor: 'rgba(240, 182, 35, 0.08)', textAlign: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#F0B623', mb: 1 }}>Colombia</Typography>
        <Typography variant="body2" color="text.secondary">Acredita mensual</Typography>
      </Box>
      <Box sx={{ p: 3, borderRadius: 3, bgcolor: 'rgba(28, 163, 50, 0.08)', textAlign: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#1CA332', mb: 1 }}>Mexico</Typography>
        <Typography variant="body2" color="text.secondary">Prima vacacional obligatoria</Typography>
      </Box>
    </Box>
    <Box sx={{ maxWidth: 800, display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
      <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
        Hoy el admin puede hacer todo esto en el modulo, la funcionalidad esta. Pero le falta un acompanamiento inteligente: una guia que le diga cuales son las mejores practicas, la posibilidad de simular un cambio antes de aplicarlo, y una forma clara de entender que paso cuando algo no cuadra.
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', fontWeight: 600, color: '#1CA332' }}>
        Lo que construimos viene a potenciar lo que el modulo ya hace bien, con una capa de inteligencia que lo hace mas accesible.
      </Typography>
    </Box>
  </Box>
);

// Slide 5: La Solucion
const Slide5Solucion = () => (
  <Box
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      px: 3,
    }}
  >
    <Typography
      variant="h2"
      sx={{
        fontSize: { xs: '1.8rem', md: '2.5rem' },
        fontWeight: 700,
        color: '#1CA332',
        textAlign: 'center',
      }}
    >
      La Solucion
    </Typography>
    <Typography
      variant="h1"
      sx={{
        fontSize: { xs: '2.5rem', md: '4rem' },
        fontWeight: 700,
        background: 'linear-gradient(135deg, #496BE3 0%, #2DA8A4 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center',
      }}
    >
      TimeOff Navigator
    </Typography>
    <Box
      sx={{
        maxWidth: 800,
        p: 4,
        borderRadius: 3,
        bgcolor: 'background.paper',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        textAlign: 'center',
      }}
    >
      <Typography variant="h5" sx={{ color: 'text.primary', lineHeight: 1.6, mb: 2 }}>
        Un <strong>copiloto de IA</strong> que acompana al admin en todo el ciclo — desde disenar una politica nueva, hasta probarla, entenderla y auditarla.
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
        Simula distintos escenarios y muestra como va a impactar cada configuracion en los saldos reales. Cuando el admin necesita entender que paso, le explica la logica detras de cada resultado. Y ademas, le da visibilidad con metricas y tendencias generales del modulo.
      </Typography>
    </Box>
  </Box>
);

// Slide 6: Demo
const Slide6Demo = () => (
  <Box
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      px: 3,
    }}
  >
    <Typography
      variant="h2"
      sx={{
        fontSize: { xs: '2rem', md: '3rem' },
        fontWeight: 700,
        background: 'linear-gradient(135deg, #496BE3 0%, #2DA8A4 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center',
      }}
    >
      Demo en Vivo
    </Typography>
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        gap: 3,
        maxWidth: 900,
      }}
    >
      <Box sx={{ p: 3, borderRadius: 3, bgcolor: 'rgba(73, 107, 227, 0.08)', display: 'flex', gap: 2, alignItems: 'flex-start' }}>
        <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: 'rgba(73, 107, 227, 0.15)' }}>
          <HomeIcon sx={{ color: '#496BE3' }} />
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>Home</Typography>
          <Typography variant="body2" color="text.secondary">Comunidad conectada, politicas configuradas, acceso directo a cada herramienta. Todo centralizado.</Typography>
        </Box>
      </Box>
      <Box sx={{ p: 3, borderRadius: 3, bgcolor: 'rgba(136, 107, 255, 0.08)', display: 'flex', gap: 2, alignItems: 'flex-start' }}>
        <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: 'rgba(136, 107, 255, 0.15)' }}>
          <LabIcon sx={{ color: '#886BFF' }} />
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>Gestor de Politicas</Typography>
          <Typography variant="body2" color="text.secondary">El corazon de la herramienta. Crea o edita politicas con el copiloto paso a paso. Simula el impacto antes de aplicar.</Typography>
        </Box>
      </Box>
      <Box sx={{ p: 3, borderRadius: 3, bgcolor: 'rgba(240, 182, 35, 0.08)', display: 'flex', gap: 2, alignItems: 'flex-start' }}>
        <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: 'rgba(240, 182, 35, 0.15)' }}>
          <EventLogIcon sx={{ color: '#F0B623' }} />
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>Registro y Auditoria</Typography>
          <Typography variant="body2" color="text.secondary">Detalle completo de cada colaborador: acreditaciones, consumos, vencimientos. Reportes por ano y politica.</Typography>
        </Box>
      </Box>
      <Box sx={{ p: 3, borderRadius: 3, bgcolor: 'rgba(231, 68, 68, 0.08)', display: 'flex', gap: 2, alignItems: 'flex-start' }}>
        <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: 'rgba(231, 68, 68, 0.15)' }}>
          <ChatIcon sx={{ color: '#E74444' }} />
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>Agente de IA</Typography>
          <Typography variant="body2" color="text.secondary">Pregunta lo que necesites sobre configuracion, legislacion o saldos. Un experto de CX disponible 24/7.</Typography>
        </Box>
      </Box>
    </Box>
    <Box
      component="a"
      href="https://timeoff-navigator.vercel.app/login"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        mt: 3,
        px: 4,
        py: 2,
        borderRadius: 2,
        bgcolor: 'primary.main',
        color: 'white',
        textDecoration: 'none',
        fontWeight: 600,
        fontSize: '1.1rem',
        boxShadow: '0 4px 20px rgba(73, 107, 227, 0.4)',
        transition: 'all 0.2s ease',
        '&:hover': {
          bgcolor: 'primary.dark',
          transform: 'translateY(-2px)',
          boxShadow: '0 6px 25px rgba(73, 107, 227, 0.5)',
        },
      }}
    >
      Ir a la App
    </Box>
  </Box>
);

// Slide 7: El Impacto
const Slide7Impacto = () => (
  <Box
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      px: 3,
    }}
  >
    <Typography
      variant="h2"
      sx={{
        fontSize: { xs: '1.8rem', md: '2.5rem' },
        fontWeight: 700,
        background: 'linear-gradient(135deg, #1CA332 0%, #2DA8A4 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center',
      }}
    >
      El Impacto
    </Typography>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        maxWidth: 800,
      }}
    >
      <Box sx={{ p: 3, borderRadius: 3, bgcolor: 'rgba(73, 107, 227, 0.08)', borderLeft: '4px solid #496BE3' }}>
        <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary', mb: 1 }}>
          Tiempo de implementacion comprimido
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Lo que hoy toma dias de ida y vuelta con CX, aca se resuelve en minutos. Cuando implementar es mas facil, mas clientes van a querer activar el modulo.
        </Typography>
      </Box>
      <Box sx={{ p: 3, borderRadius: 3, bgcolor: 'rgba(28, 163, 50, 0.08)', borderLeft: '4px solid #1CA332' }}>
        <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary', mb: 1 }}>
          Equipo de CX liberado
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Las consultas repetitivas las absorbe el copiloto. El equipo humano se enfoca en lo que realmente necesita su expertise.
        </Typography>
      </Box>
      <Box sx={{ p: 3, borderRadius: 3, bgcolor: 'rgba(240, 182, 35, 0.08)', borderLeft: '4px solid #F0B623' }}>
        <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary', mb: 1 }}>
          Protegemos el modulo donde mas importa
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Simular antes de aplicar significa cero errores inesperados, menos tickets, menos urgencias, y clientes mas felices con la herramienta que mas valoran.
        </Typography>
      </Box>
    </Box>
    <Box sx={{ p: 3, borderRadius: 3, bgcolor: 'background.paper', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', maxWidth: 700, textAlign: 'center' }}>
      <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>
        Implementaciones mas rapidas, mas clientes activando el modulo, menos churn en los que ya lo usan. <br />
        <span style={{ color: '#1CA332' }}>TimeOff Navigator es una palanca directa de revenue para Humand.</span>
      </Typography>
    </Box>
  </Box>
);

// Slide 8: Cierre y Equipo
const Slide8Cierre = () => (
  <Box
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 5,
    }}
  >
    <Box sx={{ textAlign: 'center', maxWidth: 700 }}>
      <Typography variant="h5" sx={{ color: 'text.secondary', mb: 2 }}>
        Construimos esto en 2 dias.
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary' }}>
        No es un mockup — es un producto funcional listo para el roadmap de Humand.
      </Typography>
      <Box sx={{ mt: 3, display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Typography variant="body2" color="text.secondary">
          Construido con:
        </Typography>
        <Box sx={{ px: 2, py: 1, borderRadius: 2, bgcolor: 'rgba(0,0,0,0.05)', fontWeight: 600, color: 'text.primary' }}>
          Claude Code
        </Box>
        <Box sx={{ px: 2, py: 1, borderRadius: 2, bgcolor: 'rgba(0,0,0,0.05)', fontWeight: 600, color: 'text.primary' }}>
          Vercel
        </Box>
        <Box sx={{ px: 2, py: 1, borderRadius: 2, bgcolor: 'rgba(0,0,0,0.05)', fontWeight: 600, color: 'text.primary' }}>
          API de Claude
        </Box>
      </Box>
    </Box>
    <Typography
      variant="h1"
      sx={{
        fontSize: { xs: '3rem', md: '5rem' },
        fontWeight: 700,
        background: 'linear-gradient(135deg, #496BE3 0%, #2DA8A4 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center',
      }}
    >
      Somos JaguAir
    </Typography>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: { xs: 3, md: 5 },
        maxWidth: 900,
      }}
    >
      {teamMembers.map((member) => (
        <Box
          key={member.name}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1.5,
          }}
        >
          <Box
            component="img"
            src={member.photo}
            alt={member.name}
            crossOrigin="anonymous"
            sx={{
              width: { xs: 100, md: 120 },
              height: { xs: 100, md: 120 },
              borderRadius: '50%',
              objectFit: 'cover',
              border: '4px solid',
              borderColor: 'primary.main',
              boxShadow: '0 8px 30px rgba(73, 107, 227, 0.3)',
            }}
          />
          <Typography
            variant="body1"
            sx={{
              fontWeight: 500,
              textAlign: 'center',
              color: 'text.primary',
              fontSize: { xs: '0.85rem', md: '1rem' },
            }}
          >
            {member.name}
          </Typography>
        </Box>
      ))}
    </Box>
  </Box>
);

const slides = [Slide1Gancho, Slide2Problemas, Slide3Negocio, Slide4Problema, Slide5Solucion, Slide6Demo, Slide7Impacto, Slide8Cierre];

const PresentacionPitch = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          py: 4,
        }}
      >
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CurrentSlideComponent />
        </Box>

        {/* Navigation */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 3,
            py: 3,
          }}
        >
          <IconButton
            onClick={prevSlide}
            disabled={currentSlide === 0}
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 2,
              '&:hover': { bgcolor: 'primary.main', color: 'white' },
              '&:disabled': { opacity: 0.3 },
            }}
          >
            <PrevIcon />
          </IconButton>

          <Box sx={{ display: 'flex', gap: 1 }}>
            {slides.map((_, index) => (
              <IconButton
                key={index}
                onClick={() => setCurrentSlide(index)}
                sx={{ p: 0.5 }}
              >
                <DotIcon
                  sx={{
                    fontSize: 12,
                    color: currentSlide === index ? 'primary.main' : 'text.disabled',
                  }}
                />
              </IconButton>
            ))}
          </Box>

          <IconButton
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 2,
              '&:hover': { bgcolor: 'primary.main', color: 'white' },
              '&:disabled': { opacity: 0.3 },
            }}
          >
            <NextIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default PresentacionPitch;
