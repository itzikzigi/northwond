type SqlStringType = string | null;
type SqlNumType = number | null;

interface employeeInterface {
  employee_id: SqlStringType;
  last_name: SqlStringType;
  first_name: SqlStringType;
  title: SqlStringType;
  title_of_courtesy: SqlStringType;
  birth_date: SqlStringType;
  hire_date: SqlStringType;
  address: SqlStringType;
  city: SqlStringType;
  region: SqlStringType;
  postal_code: SqlStringType;
  country: SqlStringType;
  home_phone: SqlStringType;
  extension: SqlStringType;
  notes: SqlStringType;
  reports_to: SqlStringType;
}

interface ProductInterface {
  product_id: SqlStringType;
  product_name: SqlStringType;
  supplier_id: keyof SupplierInterface;
  category_id: keyof CategoryInterface;
  quantity_per_unit: number | SqlStringType;
  unit_price: SqlNumType;
  units_in_stock: SqlNumType;
  units_on_order: SqlNumType;
  reorder_level: SqlNumType;
  discontinued: 0 | 1;
}

interface CategoryInterface {
  category_id: SqlStringType;
  category_name: SqlStringType;
  description: SqlStringType;
  picture: SqlStringType;
}

interface SupplierInterface {
  supplier_id: SqlStringType;
  company_name: SqlStringType;
  contact_name: SqlStringType;
  contact_title: SqlStringType;
  address: SqlStringType;
  city: SqlStringType;
  region: SqlStringType;
  postal_code: SqlStringType;
  country: SqlStringType;
  phone: SqlStringType;
  fax: SqlStringType;
  home_page: SqlStringType;
}

interface CustomerInterface {
  customer_id: SqlStringType;
  company_name: SqlStringType;
  contact_name: SqlStringType;
  address: SqlStringType;
  city: SqlStringType;
  region: SqlStringType;
  postal_code: SqlStringType;
  country: SqlStringType;
  phone: SqlStringType;
  fax: SqlStringType;
}

interface ShipperInterface {
  shipper_id: SqlStringType;
  company_name: SqlStringType;
  phone: SqlStringType;
}

interface OrderInterface {
  order_id: SqlStringType;
  customer_id: keyof CustomerInterface;
  employee_id: keyof employeeInterface;
  order_date: SqlStringType;
  required_date: SqlStringType;
  shipped_date: SqlStringType;
  ship_via: SqlStringType;
  freight: SqlStringType;
  ship_name: SqlStringType;
  ship_address: SqlStringType;
  ship_city: SqlStringType;
  ship_region: SqlStringType;
  ship_postal_code: SqlStringType;
  ship_country: SqlStringType;
}
