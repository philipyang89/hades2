export default function TailwindResponsiveTest() {
  return (
    <div>
      <div className="bg-red-500 text-white p-4 sm:bg-blue-500 text-foo">
        This is red below 600px, blue at 600px and up.
      </div>
    </div>
  );
}