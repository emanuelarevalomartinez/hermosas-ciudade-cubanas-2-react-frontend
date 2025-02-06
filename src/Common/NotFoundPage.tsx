import { NavLink, useNavigate } from "react-router-dom";
import { PageDimensions } from "./PageDimensions";
import { Buttom } from "./Buttom";

export function NotFoundPage() {

const navigate = useNavigate();

  return (
    <>
      <PageDimensions>
        <div className="flex w-1/2 mt-20 m-auto justify-center">
          <div className="mx-auto text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500 text-gray-900 dark:text-white">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Something's missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-600 dark:text-gray-400">
              Sorry, we can't find that page.
            </p>
            <div className="flex flex-col sm:flex-row place-content-center">
                <Buttom onClick={ ()=> { navigate("/")} }  name="Go Home"/>
                <Buttom onClick={ ()=> { navigate(-1) } } name="Volver"/>
            </div>
          </div>
        </div>
      </PageDimensions>
    </>
  );
}
