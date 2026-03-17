import CalendlyButton from '@/components/ui/CalendlyButton';

export default function AnnouncementBar() {
  return (
    <div className="bg-[#280aa5] py-2 px-4 text-center text-sm">
      <span className="font-bold uppercase tracking-widest text-white">FOR A LIMITED NUMBER OF OPERATORS:</span>
      {' '}
      <span className="text-[#e7e6ee]">Designed for shops that want repeatable growth, not guesswork.</span>
      {' '}
      <CalendlyButton className="underline text-white font-semibold ml-2 hover:text-[#e7e6ee] transition-colors">
        Check Availability
      </CalendlyButton>
    </div>
  );
}
