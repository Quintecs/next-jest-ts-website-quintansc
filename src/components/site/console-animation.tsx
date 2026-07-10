export default function ConsoleAnimation() {
  return (
    <div className="rounded-xl bg-panel px-5 py-3">
      <div className="flex w-[70px] items-center justify-between">
        <span className="size-[15px] rounded-full bg-red-500" />
        <span className="size-[15px] rounded-full bg-green-600" />
        <span className="size-[15px] rounded-full bg-yellow-400" />
      </div>
      <div className="mt-3 flex h-4 w-[40ch] animate-[typing_5s_steps(40)] items-center overflow-hidden whitespace-nowrap border-r-[3px] font-mono text-sm">
        <pre>$ </pre>
        <span className="text-[#4682B4]">console</span>
        <p className="text-[#2E8B57]">.log</p>(
        <small className="text-[#F0E68C]">
          &apos;Follow me on social media&apos;
        </small>
        )
      </div>
      <style>{`@keyframes typing { from { width: 0 } }`}</style>
    </div>
  );
}
