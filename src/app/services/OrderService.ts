import axios from "axios";
import { serverApi } from "../../lib/config";

class OrderService {
    private readonly path: string;

    constuctor() {
        this.path = serverApi;
    }
}

export default OrderService;