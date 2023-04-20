<script>
  import { Router, Route } from "svelte-routing";
  import MainMenu from "./MainMenu.svelte";
  import BusinessOperations from "./business_operations.svelte";
  import CustomerRelationship from "./customer_relationship.svelte";
  import DataDrivenDecisionMaking from "./data_driven_decision_making.svelte";
  import InnovationSustainabilityGrowth from "./innovation_sustainability_growth.svelte";
  import SalesMarketingCustomerExperience from "./sales_marketing_customer_experience.svelte";
  import WorkforceManagementDevelopment from "./workforce_management_development.svelte";
</script>

<Router>
  <Route path="/" component="{MainMenu}" />
  <Route path="/business_operations" component="{BusinessOperations}" />
  <Route path="/customer_relationship" component="{CustomerRelationship}" />
  <Route path="/data_driven_decision_making" component="{DataDrivenDecisionMaking}" />
  <Route path="/innovation_sustainability_growth" component="{InnovationSustainabilityGrowth}" />
  <Route path="/sales_marketing_customer_experience" component="{SalesMarketingCustomerExperience}" />
  <Route path="/workforce_management_development" component="{WorkforceManagementDevelopment}" />
</Router>
