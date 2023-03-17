import petstore from "@api/petstore";

export async function getServerSideProps() {
  let pets: any = [];

  try {
    const res = await petstore.listPets();
    pets = res.data;
  } catch (err: any) {
    console.log(err);
  }


  return {
    props: {
      pets,
    },
  }
}

export default function Home(props: any) {
  console.log(props)
  return (
    <p>{JSON.stringify(props.pets)}</p>
  )
}