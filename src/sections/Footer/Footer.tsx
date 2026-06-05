import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { FOOTER_COLUMNS } from '@/data/footer';

export function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        <div className="footer-card">
          <div className="footer-divider" />

          <div className="footer-content">
            <div className="footer-brand">
              <Typography as="h3" variant="h3" color="white" cursor="default">
                Clipo AI
              </Typography>

              <Typography variant="body-md" color="gray-400" cursor="default">
                Turn long-form content into viral short-form videos with the power of AI.
              </Typography>
            </div>

            <div className="footer-links">
              {FOOTER_COLUMNS.map((column) => (
                <div key={column.title} className="footer-column">
                  <Typography variant="body-s" color="white" cursor="default">
                    {column.title}
                  </Typography>

                  <ul>
                    {column.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="footer-link">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="footer-divider" />

          <Typography
            variant="body-s"
            color="gray-400"
            cursor="default"
            className="footer-copyright"
          >
            © 2026 Clipo AI. All rights reserved.
          </Typography>
        </div>
      </Container>
    </footer>
  );
}
