import { useEffect } from "react";
import { useRouter } from "next/router";
import { Meta } from "~/src/components/meta";

export default function Page() {
  const newDate = new Date();
  const getHour = newDate.getHours();
  const category = getHour < 12 ? "/dzikir-pagi" : "/dzikir-sore";
  const router = useRouter();

  useEffect(() => {
    void router.push(category);
  }, [category, router]);

  return <Meta />;
}
