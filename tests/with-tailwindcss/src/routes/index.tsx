import { action, createAsync, query, reload } from "@solidjs/router";
import foto from "../../images/foto.png";
import { Form } from "~/components/Form";
const data = [{ id: 1, name: "John" }];

const getData = query(async () => {
  "use server";
  return data;
}, "getData");
const mutate = action(async () => {
  "use server";
  data.push({ id: data.length + 1, name: "Jane" });
  return reload({ revalidate: getData.key });
});
export default function Home() {
  const data = createAsync(() => getData());

  return (
    <main class="text-center mx-auto  p-4 ">
      <pre>{JSON.stringify(data(), null, 1)}</pre>
      <form action={mutate} method="post">
        <button type="submit" class={"cursor-pointer p-5 bg-blue-400"}>
          submit
        </button>
        <img src={foto} />
      </form>
      <Form />
    </main>
  );
}
