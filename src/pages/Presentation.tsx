import { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Paper,
  Avatar,
} from '@mui/material';
import {
  ChevronLeft as PrevIcon,
  ChevronRight as NextIcon,
  Circle as DotIcon,
} from '@mui/icons-material';

const teamMembers = [
  {
    name: 'Guillermo Sequeira',
    photo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/guille%20foto-GkSMlXU30P0RUKAaqsby5xXgfvbMbr.png',
  },
  {
    name: 'Matias Ensinck',
    photo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mATHI%20FOTO-eMEblVvxFr0hPaH6louPRmBk4mAAKd.jpeg',
  },
  {
    name: 'Emilia Wittenstein',
    photo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emi%20foto-UNwPptdf6cfB00QLQNq5ib3ol6VaGa.png',
  },
  {
    name: 'Luciano Lucero',
    photo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Luchi%20foto-PsfXzLUoIP9gXAr7tdWir1RKnMcUck.png',
  },
];

const painPoints = [
  { icon: '📞', text: 'Alto volumen de requests al equipo de soporte' },
  { icon: '🔧', text: 'Configuraciones iniciales complejas y confusas' },
  { icon: '📊', text: 'Falta de visibilidad sobre saldos y movimientos' },
  { icon: '⚠️', text: 'Errores al modificar politicas activas sin previsualizacion' },
];

const solutionFeatures = [
  {
    icon: '🤖',
    title: 'Gestor de Politicas con IA',
    desc: 'Copiloto que guia paso a paso la configuracion',
  },
  {
    icon: '📋',
    title: 'Registro de Movimientos',
    desc: 'Historial completo de eventos por usuario',
  },
  {
    icon: '📈',
    title: 'Auditoria de Saldos',
    desc: 'Reportes descargables por ano y politica',
  },
  {
    icon: '🧪',
    title: 'Sandbox de Simulacion',
    desc: 'Prever impacto antes de aplicar cambios',
  },
];

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      handlePrev();
    }
  };

  return (
    <Box
      tabIndex={0}
      onKeyDown={handleKeyDown}
      sx={{
        position: 'fixed',
        inset: 0,
        bgcolor: '#0D1117',
        display: 'flex',
        flexDirection: 'column',
        outline: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Main Content */}
      <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 4 }}>
        {/* Slide 1: Team */}
        {currentSlide === 0 && (
          <Box sx={{ textAlign: 'center', maxWidth: 1000 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '3rem', md: '5rem' },
                fontWeight: 800,
                background: 'linear-gradient(135deg, #496BE3 0%, #886BFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
              }}
            >
              JaguAir
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '1rem', md: '1.25rem' },
                color: 'rgba(255,255,255,0.6)',
                mb: 6,
                letterSpacing: 2,
              }}
            >
              HACKATHON 2026
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: { xs: 3, md: 6 },
                flexWrap: 'wrap',
              }}
            >
              {teamMembers.map((member) => (
                <Box key={member.name} sx={{ textAlign: 'center' }}>
                  <Avatar
                    src={member.photo}
                    sx={{
                      width: { xs: 100, md: 140 },
                      height: { xs: 100, md: 140 },
                      mx: 'auto',
                      mb: 2,
                      border: '3px solid rgba(73, 107, 227, 0.5)',
                      boxShadow: '0 4px 20px rgba(73, 107, 227, 0.3)',
                    }}
                  />
                  <Typography
                    sx={{
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: { xs: '0.9rem', md: '1rem' },
                    }}
                  >
                    {member.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        )}

        {/* Slide 2: Problem */}
        {currentSlide === 1 && (
          <Box sx={{ maxWidth: 900, textAlign: 'center' }}>
            <Typography
              sx={{
                fontSize: { xs: '0.875rem', md: '1rem' },
                color: '#E74444',
                fontWeight: 600,
                letterSpacing: 3,
                mb: 2,
              }}
            >
              EL PROBLEMA
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                color: '#fff',
                mb: 2,
              }}
            >
              El modulo de Time Off genera
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                background: 'linear-gradient(135deg, #E74444 0%, #F0B623 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 6,
              }}
            >
              friccion en implementaciones y soporte
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: 3,
                textAlign: 'left',
              }}
            >
              {painPoints.map((point, idx) => (
                <Paper
                  key={idx}
                  sx={{
                    p: 3,
                    bgcolor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <Typography sx={{ fontSize: '1.75rem' }}>{point.icon}</Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>
                    {point.text}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Box>
        )}

        {/* Slide 3: Solution */}
        {currentSlide === 2 && (
          <Box sx={{ maxWidth: 1000, textAlign: 'center' }}>
            <Typography
              sx={{
                fontSize: { xs: '0.875rem', md: '1rem' },
                color: '#1CA332',
                fontWeight: 600,
                letterSpacing: 3,
                mb: 2,
              }}
            >
              NUESTRA SOLUCION
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                color: '#fff',
                mb: 1,
              }}
            >
              TimeOff Navigator
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '1rem', md: '1.25rem' },
                color: 'rgba(255,255,255,0.6)',
                mb: 6,
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              Herramienta para disenar, simular y entender politicas de vacaciones y permisos
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: 3,
              }}
            >
              {solutionFeatures.map((feature, idx) => (
                <Paper
                  key={idx}
                  sx={{
                    p: 3,
                    bgcolor: 'rgba(73, 107, 227, 0.08)',
                    border: '1px solid rgba(73, 107, 227, 0.2)',
                    borderRadius: 3,
                    textAlign: 'left',
                  }}
                >
                  <Typography sx={{ fontSize: '2rem', mb: 1 }}>{feature.icon}</Typography>
                  <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', mb: 0.5 }}>
                    {feature.title}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                    {feature.desc}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Box>
        )}

        {/* Slide 4: Demo CTA */}
        {currentSlide === 3 && (
          <Box sx={{ textAlign: 'center', maxWidth: 800 }}>
            <Typography
              sx={{
                fontSize: { xs: '0.875rem', md: '1rem' },
                color: '#886BFF',
                fontWeight: 600,
                letterSpacing: 3,
                mb: 3,
              }}
            >
              VEAMOSLO EN ACCION
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 700,
                color: '#fff',
                mb: 3,
              }}
            >
              Demo Time
            </Typography>
            <Box
              component="a"
              href="https://timeoff-navigator.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.5,
                mt: 2,
                mb: 4,
                px: 4,
                py: 2,
                borderRadius: 3,
                bgcolor: '#496BE3',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '1.25rem',
                transition: 'all 0.2s',
                boxShadow: '0 4px 20px rgba(73, 107, 227, 0.4)',
                '&:hover': {
                  bgcolor: '#3a5bc7',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 24px rgba(73, 107, 227, 0.5)',
                },
              }}
            >
              Abrir TimeOff Navigator
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: 4,
                justifyContent: 'center',
                flexWrap: 'wrap',
                mt: 4,
              }}
            >
              {[
                { label: 'Crear politica', color: '#496BE3' },
                { label: 'Ver movimientos', color: '#886BFF' },
                { label: 'Auditar saldos', color: '#F0B623' },
                { label: 'Simular cambios', color: '#1CA332' },
              ].map((item) => (
                <Box
                  key={item.label}
                  sx={{
                    px: 3,
                    py: 1.5,
                    borderRadius: 2,
                    bgcolor: `${item.color}20`,
                    border: `1px solid ${item.color}40`,
                  }}
                >
                  <Typography sx={{ color: item.color, fontWeight: 600 }}>
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Box>

      {/* Navigation */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 3,
          pb: 4,
        }}
      >
        <IconButton
          onClick={handlePrev}
          disabled={currentSlide === 0}
          sx={{
            color: '#fff',
            bgcolor: 'rgba(255,255,255,0.1)',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
            '&.Mui-disabled': { color: 'rgba(255,255,255,0.2)' },
          }}
        >
          <PrevIcon />
        </IconButton>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <DotIcon
              key={idx}
              sx={{
                fontSize: 12,
                color: idx === currentSlide ? '#496BE3' : 'rgba(255,255,255,0.3)',
                cursor: 'pointer',
                transition: 'color 0.2s',
              }}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </Box>
        <IconButton
          onClick={handleNext}
          disabled={currentSlide === totalSlides - 1}
          sx={{
            color: '#fff',
            bgcolor: 'rgba(255,255,255,0.1)',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
            '&.Mui-disabled': { color: 'rgba(255,255,255,0.2)' },
          }}
        >
          <NextIcon />
        </IconButton>
      </Box>

      {/* Slide counter */}
      <Typography
        sx={{
          position: 'absolute',
          bottom: 16,
          right: 24,
          color: 'rgba(255,255,255,0.4)',
          fontSize: '0.875rem',
        }}
      >
        {currentSlide + 1} / {totalSlides}
      </Typography>
    </Box>
  );
};

export default Presentation;
