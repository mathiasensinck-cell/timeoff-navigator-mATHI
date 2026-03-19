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
  TuneRounded as PolicyIcon,
  ListAlt as LogIcon,
  Assessment as ReportsIcon,
  SmartToy as AiIcon,
} from '@mui/icons-material';

const teamMembers = [
  {
    name: 'Guillermo Sequeira',
    photo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/guille%20foto-JCAsCGuTEAMVRgRjPWDgjSQ56D46To.png',
  },
  {
    name: 'Matías Ensinck',
    photo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mATHI%20FOTO-wYD0QUwJPOyZa7r9R1toK5EA4OSo9O.jpeg',
  },
  {
    name: 'Emilia Wittenstein',
    photo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emi%20foto-brnwvJKnSWNAJTWTllwtWZOh4iX9r3.png',
  },
  {
    name: 'Luciano Lucero',
    photo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Luchi%20foto-ITOrP73YUgnwKcB5EcZwEtkcT90f1w.png',
  },
];

const features = [
  {
    icon: <PolicyIcon sx={{ fontSize: 40 }} />,
    title: 'Gestor de Políticas con IA',
    description: 'Copiloto que guía paso a paso la creación y edición de políticas, explicando consecuencias antes de aplicar cambios.',
    color: '#496BE3',
  },
  {
    icon: <LogIcon sx={{ fontSize: 40 }} />,
    title: 'Registro de Movimientos',
    description: 'Línea del tiempo con todos los eventos de saldo de un empleado: acreditaciones, consumos y expiraciones.',
    color: '#886BFF',
  },
  {
    icon: <ReportsIcon sx={{ fontSize: 40 }} />,
    title: 'Auditoría de Saldos',
    description: 'Reportes descargables diferenciados por año y política, sin depender de Redash.',
    color: '#F0B623',
  },
  {
    icon: <AiIcon sx={{ fontSize: 40 }} />,
    title: 'Agente Experto',
    description: 'Chat con IA especializado en configuración, legislación laboral y buenas prácticas.',
    color: '#E74444',
  },
];

const Slide1Team = () => (
  <Box
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
    }}
  >
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
      JaguAir
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
              width: { xs: 120, md: 150 },
              height: { xs: 120, md: 150 },
              borderRadius: '50%',
              objectFit: 'cover',
              border: '4px solid',
              borderColor: 'primary.main',
              boxShadow: '0 8px 30px rgba(73, 107, 227, 0.3)',
            }}
          />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 500,
              textAlign: 'center',
              color: 'text.primary',
              fontSize: { xs: '0.9rem', md: '1.1rem' },
            }}
          >
            {member.name}
          </Typography>
        </Box>
      ))}
    </Box>
  </Box>
);

const Slide2Problem = () => (
  <Box
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 5,
      px: 3,
    }}
  >
    <Typography
      variant="h2"
      sx={{
        fontSize: { xs: '2rem', md: '3rem' },
        fontWeight: 700,
        color: '#E74444',
        textAlign: 'center',
      }}
    >
      El Problema
    </Typography>
    <Box
      sx={{
        maxWidth: 800,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
    >
      <Box
        sx={{
          p: 4,
          borderRadius: 3,
          bgcolor: 'rgba(231, 68, 68, 0.08)',
          borderLeft: '4px solid #E74444',
        }}
      >
        <Typography variant="h4" sx={{ mb: 1, fontWeight: 600, color: 'text.primary' }}>
          Alta fricción en implementaciones
        </Typography>
        <Typography variant="body1" color="text.secondary">
          El módulo de TimeOff genera muchas requests de soporte porque las configuraciones iniciales son complejas y difíciles de entender.
        </Typography>
      </Box>
      <Box
        sx={{
          p: 4,
          borderRadius: 3,
          bgcolor: 'rgba(240, 182, 35, 0.08)',
          borderLeft: '4px solid #F0B623',
        }}
      >
        <Typography variant="h4" sx={{ mb: 1, fontWeight: 600, color: 'text.primary' }}>
          Falta de visibilidad
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Los administradores no pueden ver fácilmente el historial de movimientos ni entender por qué un empleado tiene cierto saldo.
        </Typography>
      </Box>
      <Box
        sx={{
          p: 4,
          borderRadius: 3,
          bgcolor: 'rgba(136, 107, 255, 0.08)',
          borderLeft: '4px solid #886BFF',
        }}
      >
        <Typography variant="h4" sx={{ mb: 1, fontWeight: 600, color: 'text.primary' }}>
          Riesgo al modificar políticas
        </Typography>
        <Typography variant="body1" color="text.secondary">
          No existe un entorno seguro para prever el impacto de cambiar una política activa antes de romper lo que ya está funcionando.
        </Typography>
      </Box>
    </Box>
  </Box>
);

const Slide3Solution = () => (
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
        color: '#1CA332',
        textAlign: 'center',
      }}
    >
      La Solución
    </Typography>
    <Typography
      variant="h3"
      sx={{
        fontSize: { xs: '1.5rem', md: '2rem' },
        fontWeight: 600,
        background: 'linear-gradient(135deg, #496BE3 0%, #2DA8A4 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center',
        mb: 2,
      }}
    >
      TimeOff Navigator
    </Typography>
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        gap: 3,
        maxWidth: 900,
      }}
    >
      {features.map((feature) => (
        <Box
          key={feature.title}
          sx={{
            p: 3,
            borderRadius: 3,
            bgcolor: 'background.paper',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            display: 'flex',
            gap: 2,
            alignItems: 'flex-start',
            borderTop: `3px solid ${feature.color}`,
          }}
        >
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: `${feature.color}15`,
              color: feature.color,
              flexShrink: 0,
            }}
          >
            {feature.icon}
          </Box>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 0.5 }}>
              {feature.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {feature.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
);

const Slide4Demo = () => (
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
        fontSize: { xs: '2.5rem', md: '4rem' },
        fontWeight: 700,
        background: 'linear-gradient(135deg, #496BE3 0%, #2DA8A4 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center',
      }}
    >
      Demo Time
    </Typography>
    <Typography
      variant="h4"
      sx={{
        color: 'text.secondary',
        textAlign: 'center',
        maxWidth: 600,
      }}
    >
      Veamos TimeOff Navigator en acción
    </Typography>
    <Box
      sx={{
        mt: 2,
        display: 'flex',
        gap: 2,
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {['Gestor de Políticas', 'Registro de Movimientos', 'Auditoría', 'Agente IA'].map((item, i) => (
        <Box
          key={item}
          sx={{
            px: 3,
            py: 1.5,
            borderRadius: 2,
            bgcolor: [
              'rgba(73, 107, 227, 0.1)',
              'rgba(136, 107, 255, 0.1)',
              'rgba(240, 182, 35, 0.1)',
              'rgba(231, 68, 68, 0.1)',
            ][i],
            color: ['#496BE3', '#886BFF', '#F0B623', '#E74444'][i],
            fontWeight: 600,
          }}
        >
          {item}
        </Box>
      ))}
    </Box>
  </Box>
);

const slides = [Slide1Team, Slide2Problem, Slide3Solution, Slide4Demo];

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
