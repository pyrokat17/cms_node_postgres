import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React from "react";

export default function TablesPage() {
	return (
		<Layout>
			<>
				<Link href="tables/create">Create new Table</Link>
			</>
		</Layout>
	);
}
