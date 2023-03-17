// import { useRouter } from "next/router"

const Details = ({product}) => {
    console.log(product)
    return <h1>details</h1>
    // const { query } = useRouter()

    // console.log(query.id)
}

export default Details

export async function getServerSideProps(context) {
    const { query: {id}} = context
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    let product = await response.json()
    // product = undefined;
    // if (!product) {
    //     return {
    //         redirect: {
    //             destination: "http://google.com",
    //             permanent: false,
    //         }
    //     }
    // }
    return {
        props: {
            product
        }
    }
}
