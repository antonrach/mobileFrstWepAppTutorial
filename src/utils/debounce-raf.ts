export function debounceRaf(callback: Function, ctx: any): EventListenerOrEventListenerObject {
  let timeoutId: number;

  return () => {
    const args: IArguments = arguments;

    if (timeoutId) {
      window.cancelAnimationFrame(timeoutId);
    }

    timeoutId = window.requestAnimationFrame(function() {
      callback.apply(ctx, args)
    });
  }
}
