import {ChevronRightIcon} from "@chakra-ui/icons";
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

const LinkBack = ({id}) => {
    const navigate = useNavigate();

    return (
        <Breadcrumb mt={10} separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>
                <BreadcrumbLink onClick={() => navigate(-1)}>
                    Cryptocurrencies
                </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink>
                    {id}
                </BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}

export default LinkBack;