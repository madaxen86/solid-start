// import { createForm } from "@formisch/solid";

import { createForm } from "@modular-forms/solid";
import * as v from "valibot";
const LoginSchema = v.object({
  email: v.pipe(v.string(), v.email()),
  password: v.pipe(v.string(), v.minLength(8))
});
type LoginForm = v.InferInput<typeof LoginSchema>;
export function Form() {
  // const _ = createForm({
  //   schema: LoginSchema
  // });
  const [loginForm, { Form, Field }] = createForm<LoginForm>({
    initialValues: {
      email: "",
      password: ""
    }
  });
  return (
    <form method="post">
      <button type="submit" class={"cursor-pointer p-5 bg-blue-400"}>
        submit
      </button>
    </form>
  );
}
