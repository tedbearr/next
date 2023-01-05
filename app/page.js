"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function Page() {
  let router = useRouter();
  let [state, setState] = useState(true);
  if (state == true) {
    useEffect(() => {
      router.push("/home");
    });
  } else {
    useEffect(() => {
      router.push("/login");
    });
  }
  return <div>Redirecting...</div>;
}
