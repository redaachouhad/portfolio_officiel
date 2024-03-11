"use client";

import Link from "next/link";

function ItemMenu({ title, url }) {
  return <Link href={url}>{title}</Link>;
}

export default ItemMenu;
