import { useState, type FormEvent } from "react";

type FormValues = { email: string; password: string };
type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = { email: "", password: "" };

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  const email = values.email.trim();

  if (!email) errors.email = "Email address is required.";
  else if (/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.password) errors.password = "Password is required.";
  else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters.";
  }
  return errors;
}

export function LoginForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (field: keyof FormValues, value: string): void => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatusMessage("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatusMessage("");
      return;
    }

    // Demo only: do not log, persist, or transmit the password.
    setStatusMessage(
      "Form validation passed. Connect this form to a secure authentication API to sign in.",
    );
  };

  return (
    <form className="login-card" onSubmit={handleSubmit} noValidate>
      <div className="form-heading">
        <h2>Sign in to your account</h2>
        <p>Enter your details to continue.</p>
      </div>

      <div className="form-field">
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="username"
          value={values.email}
          onChange={(event) => handleChange("email", event.target.value)}
          placeholder="you@example.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p className="field-error" id="email-error" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="password">Password</label>
        <div className="password-input">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            value={values.password}
            onChange={(event) => handleChange("password", event.target.value)}
            placeholder="Enter your password"
            aria-invalid={Boolean(errors.password)}
            aria-describedby={errors.password ? "password-error" : undefined}
          />
          <button
            className="visibility-button"
            type="button"
            onClick={() => setShowPassword((current) => !current)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        {errors.password && (
          <p className="field-error" id="password-error" role="alert">
            {errors.password}
          </p>
        )}
      </div>

      <div className="form-options">
        <label className="remember-option">
          <input type="checkbox" name="rememberMe" />
          <span>Remember me</span>
        </label>
        <span className="helper-text">Forgot password?</span>
      </div>

      <button className="submit-button" type="submit">
        Sign in
      </button>
      <p className="form-status" role="status" aria-live="polite">
        {statusMessage}
      </p>
      <p className="demo-note">
        Demo only. This form validates inputs locally and does not authenticate
        users.
      </p>
    </form>
  );
}
