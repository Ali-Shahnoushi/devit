import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero mt-8">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold">
            به <span className="text-primary">Devit</span> خوش اومدی!
          </h1>
          <p className="py-6">
            به دنیای IT و مهندسی نرم افزار سلام کن!
            <br />
            جایی که میتونی از تجربه دیگران استفاده کنی و با بقیه تیم سازی کنی!
          </p>
          <button className="btn btn-primary">
            <Link to="/sign-in">به دویت ملحق شو</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
