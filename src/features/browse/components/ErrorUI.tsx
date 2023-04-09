export function ErrorUI({
  message,
  onRefetch,
}: {
  message: string;
  onRefetch?: () => void;
}) {
  return (
    <div>
      <div>There is Error. Please try again later.</div>
      {onRefetch && (
        <button type="button" onClick={onRefetch}>
          Try Again
        </button>
      )}
      <details>
        <summary>Show Raw Error</summary>
        {message}
      </details>
    </div>
  );
}
