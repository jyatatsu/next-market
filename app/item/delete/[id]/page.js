import Form from "./form"
import { getSingleItem } from "../../readsingle/[id]/page"

const DeleteItem = async (context) => {
    const params = await context.params
    const singleItem = await getSingleItem(params.id)

    return (
        <div className="page-title">
            <h1>アイテム削除</h1>
            <Form params={params} singleItem={singleItem} />
        </div>
    )
}

export default DeleteItem
