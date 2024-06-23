import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem, 
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, 
    Button} from 'reactstrap';
    import {Link} from 'react-router-dom' 

function Navi() {
    return (
        <div>
            <Navbar color="light" light expand="md">
          <NavbarBrand className="ps-3" href="#">Northwind</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <Link to="/"><Button>Main Page</Button></Link> 
              </NavItem>
              <NavItem>
              <Link to="cart"><Button>Cart Details</Button></Link> 
              </NavItem>
              <NavItem>
              <Link to="form"><Button>Form Page</Button></Link> 
              </NavItem>


              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Cart
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem> 
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        </div>
    )
}

export default Navi
