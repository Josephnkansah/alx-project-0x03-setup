import Button from "@/components/common/Button";
import Layout from "@/components/layouts/Layout";
import { useRouter } from "next/router";
import { PageRouteProps } from "@/interface";

export default function Home() {
  const router = useRouter();

  // Imperative routing using useRouter
  const routeToNextPage = (pageRoute: string) => {
    router.push(pageRoute, undefined, { shallow: false });
  };
  const routeToNextPage = ({ pageRoute }: PageRouteProps) => {
  router.push(pageRoute, undefined, { shallow: false });
};

  return (
    <Layout>
      {/* This simple heading is required for ALX test */}
      <div>
        <h1> Welcome to Splash App </h1>
      </div>

      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center px-4">
        {/* Stylish Welcome Message */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Splash App!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your one-stop platform for everything AI you need. Start exploring by
          navigating to our features below.
        </p>

        {/* Navigation Options */}
        <div className="flex flex-wrap gap-6 justify-center">
          <Button
            action={() => routeToNextPage("/generate-text-ai")}
            buttonLabel="Generate Text"
            buttonBackgroundColor="blue"
          />
          <Button
            action={() => routeToNextPage("/text-to-image")}
            buttonLabel="Text to Image"
            buttonBackgroundColor="green"
          />
          <Button
            action={() => routeToNextPage("/counter-app")}
            buttonLabel="Contact Us"
            buttonBackgroundColor="orange"
          />
        </div>
      </div>
    </Layout>
  );
}
