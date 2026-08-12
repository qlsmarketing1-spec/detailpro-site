'use client';
import Image from 'next/image';
import Link from 'next/link';
import '@/styles/quiz.css';

interface RulerProps {
  section: string;
  index: number;
  total: number;
}

interface QuizShellProps {
  ticketNumber: string;
  ruler?: RulerProps | null;
  children: React.ReactNode;
}

export default function QuizShell({ ticketNumber, ruler, children }: QuizShellProps) {
  return (
    <div className="qz-root">
      <div className="qz-glow" />
      <div className="qz-app">
        <div className="qz-masthead">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/service-pro-icon.png"
              alt="Service Pro"
              width={38}
              height={29}
              priority
            />
          </Link>
          <span className="qz-ticket">{ticketNumber}</span>
        </div>

        {ruler && (
          <div className="qz-ruler-wrap">
            <div className="qz-ruler-label">
              <span>{ruler.section}</span>
              <span>Question {ruler.index + 1} / {ruler.total}</span>
            </div>
            <div className="qz-ruler">
              {Array.from({ length: ruler.total }).map((_, i) => (
                <div key={i} className={`qz-tick${i <= ruler.index ? ' qz-filled' : ''}`} />
              ))}
            </div>
          </div>
        )}

        <div className="qz-card">{children}</div>

        <div className="qz-footer-note">
          © {new Date().getFullYear()} Service Pro — this takes about 2 minutes.
        </div>
      </div>
    </div>
  );
}
