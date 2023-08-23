export default function Progress() {
  return (
    <progress
      className='progress progress-primary w-56'
      value={50}
      max='100'
    ></progress>
  );
}
