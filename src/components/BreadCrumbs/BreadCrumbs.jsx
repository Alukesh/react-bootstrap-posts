import { MDBBreadcrumb, MDBBreadcrumbItem, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function BreadCrumbs({ items = [], active }) {
    return (
        <MDBRow>
            <MDBCol>
                <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                    {/* <MDBBreadcrumbItem>
                        <Link to={'/'}>Home</Link>
                    </MDBBreadcrumbItem> */}
                    {
                        items.map( crumb => (
                            <MDBBreadcrumbItem>
                                <Link to={crumb.path}>{crumb.text}</Link>
                            </MDBBreadcrumbItem>
                        ) )
                    }

                    <MDBBreadcrumbItem active>{active}</MDBBreadcrumbItem>
                </MDBBreadcrumb>
            </MDBCol>
        </MDBRow>
    )
}