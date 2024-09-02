import { useRef, useState } from "react";
import Input from "./components/Input";

type Errors = {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  password: string | null;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function App() {
  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<Errors>({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const firstNameValue = firstName.current?.value;
    const lastNameValue = lastName.current?.value;
    const emailValue = email.current?.value;
    const passwordValue = password.current?.value;
    if (firstNameValue === "") {
      setErrors((prev) => ({
        ...prev,
        firstName: "First Name cannot be empty",
      }));
    }
    if (lastNameValue === "") {
      setErrors((prev) => ({ ...prev, lastName: "Last Name cannot be empty" }));
    }
    if (emailValue === "") {
      setErrors((prev) => ({ ...prev, email: "Email cannot be empty" }));
    }
    if (!emailRegex.test(emailValue || "")) {
      setErrors((prev) => ({ ...prev, email: "Please provide a valid email" }));
    }

    if (passwordValue === "") {
      setErrors((prev) => ({ ...prev, password: "Password cannot be empty" }));
    }
  };

  return (
    <main className="min-h-screen flex flex-col sm:flex-row bg-mobile-pattern gap-6 sm:gap-9 sm:bg-desktop-pattern bg-primary-red justify-center items-center p-6">
      <section className="flex flex-col items-center text-white text-center gap-4 sm:items-start sm:text-left max-w-lg">
        <h1 className="text-4xl sm:text-5xl font-semibold">
          Learn to code by watching others
        </h1>
        <p className="text-white ">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invalueable.
        </p>
      </section>
      <section className="grid gap-6 w-full max-w-md">
        <button className="text-center text-white bg-accent-blue w-full p-4 hover:brightness-110 rounded-lg shadow-xl">
          <span className="font-semibold">Try it free 7 days</span> then $20/mo.
          thereafter
        </button>
        <form
          className="p-6 bg-white rounded-xl grid gap-3 drop-shadow-2xl"
          onSubmit={handleSubmit}
        >
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            ref={firstName}
            error={errors.firstName}
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            ref={lastName}
            error={errors.lastName}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            error={errors.email}
            ref={email}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            error={errors.password}
            ref={password}
          />
          <button className="text-white bg-primary-green w-full p-3 uppercase font-light tracking-wider rounded-lg drop-shadow-lg hover:brightness-110 mt-2">
            Claim your free trial
          </button>
          <p className="text-neutral-gray-blue text-xs text-center w-64 sm:w-full font-medium mx-auto mt-1">
            By clicking the button, you are agreeing to our{" "}
            <a
              className="text-primary-red font-semibold tracking-tight hover:brightness-125"
              href="#"
            >
              Terms and Services
            </a>
          </p>
        </form>
      </section>
    </main>
  );
}

export default App;
