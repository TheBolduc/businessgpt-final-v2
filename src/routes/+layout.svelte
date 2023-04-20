<script>
	import { Router, Route } from "svelte-routing";
	import Index from "./routes/index.svelte";
	import BusinessOperations from "./routes/business_operations.svelte";
	import CustomerRelationship from "./routes/customer_relationship.svelte";
	import DataDrivenDecisionMaking from "./routes/data_driven_decision_making.svelte";
	import InnovationSustainabilityGrowth from "./routes/innovation_sustainability_growth.svelte";
	import SalesMarketingCustomerExperience from "./routes/sales_marketing_customer_experience.svelte";
	import WorkforceManagementDevelopment from "./routes/workforce_management_development.svelte";
</script>

<Router>
	<Route path="/" component="{Index}" />
	<Route path="/business_operations" component="{BusinessOperations}" />
	<Route path="/customer_relationship" component="{CustomerRelationship}" />
	<Route path="/data_driven_decision_making" component="{DataDrivenDecisionMaking}" />
	<Route path="/innovation_sustainability_growth" component="{InnovationSustainabilityGrowth}" />
	<Route path="/sales_marketing_customer_experience" component="{SalesMarketingCustomerExperience}" />
	<Route path="/workforce_management_development" component="{WorkforceManagementDevelopment}" />
</Router>
