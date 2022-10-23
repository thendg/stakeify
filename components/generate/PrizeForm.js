async function deploy() {
  fetch("/api/create/Prize?args=;")
    .then((res) => res.json())
    .then(({ response }) => alert(response));
}

export default function () {
  return (
    <div className="flex flex-col w-full justify-center items-center p-8">
      <button className="hover:underline text-3xl" onClick={deploy}>
        Deploy Contract
      </button>
    </div>
  );
}
