<script>
  import { NavLink } from "$app/navigation";
</script>

<style>
  .menu-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    height: 100vh;
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
  <a class="menu-link" href="business_operations">
    Business Operations and Efficiency Related
  </a>
  <a class="menu-link" href="customer_relationship">
    Customer Relationship Related
  </a>
   <a class="menu-link" href="change_management">
    Change Management Related
  </a>
   <a class="menu-link" href="data_driven_decision_making">
    Data-Driven Decision Making Related
  </a>
   <a class="menu-link" href="innovation_sustainability_growth">
    Innovation, Sustainability and Growth Related
  </a>
   <a class="menu-link" href="sales_marketing_customer_experience">
    Sales, Marketing and Customer Experience Related
  </a>
   <a class="menu-link" href="workforce_management_development">
    Workforce, Management and Development related
  </a>
</div>
