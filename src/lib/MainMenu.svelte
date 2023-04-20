<script>
  import { NavLink } from "svelte-routing";
</script>

<style>
  .menu-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
  .menu-link {
    text-decoration: none;
    font-size: 1.5rem;
    color: #333;
    transition: color 0.3s;
  }
  .menu-link:hover {
    color: #555;
  }
</style>

<div class="menu-container">
  <NavLink class="menu-link" to="business_operations">
    Business Operations and Efficiency
  </NavLink>
  <NavLink class="menu-link" to="customer_relationship">
    Customer Relationship and Change Management
  </NavLink>
  <NavLink class="menu-link" to="data_driven_decision_making">
    Data-Driven Decision Making and Analytics
  </NavLink>
  <NavLink class="menu-link" to="innovation_sustainability_growth">
    Innovation, Sustainability, and Growth
  </NavLink>
  <NavLink class="menu-link" to="sales_marketing_customer_experience">
    Sales, Marketing, and Customer Experience
  </NavLink>
  <NavLink class="menu-link" to="workforce_management_development">
    Workforce Management and Development
  </NavLink>
</div>
