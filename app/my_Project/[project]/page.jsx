import SinglePorject from "@/components/SingleProject";
export const generateMetadata = async ({ params }) => {
  const { project } = await params;
  return {
    title: project,
  };
};
export default function Project() {
  return (
    <>
      <SinglePorject />
    </>
  );
}
