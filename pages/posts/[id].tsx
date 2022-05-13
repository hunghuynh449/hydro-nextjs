import { useRouter } from "next/router";
import * as React from "react";

export interface PostItemProps {}

export default function PostItem(props: PostItemProps) {
  const router = useRouter();
  return (
    <div>
      Post Item Page
      <p>{JSON.stringify(router.query)}</p>
    </div>
  );
}
