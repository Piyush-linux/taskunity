"use client";

import { useAuth, useOrganizationList } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function  Koko () {
  const { orgId } = useAuth();
  const { setActive, isLoaded } = useOrganizationList();

  useEffect(() => {
    if (!isLoaded) return;
    setActive({ organization: orgId });
    redirect("/admin/profile")
  }, [orgId, isLoaded, setActive]);

  return (
    <>
      hello
    </>
  );
};
