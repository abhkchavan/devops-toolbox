import type { Metadata } from "next";
import AzureCommandSearch from "./AzureCommandSearch";

export const metadata: Metadata = {
  title: "Azure CLI Commands Cheat Sheet",
  description:
    "Comprehensive Azure CLI commands for virtual machines, storage, networking, AKS, ACR, Azure Functions, Azure SQL, monitoring, identity and DevOps.",
};

type Command = {
  command: string;
  description: string;
};

type CommandSection = {
  title: string;
  commands: Command[];
};

const commandSections: CommandSection[] = [
  {
    title: "Azure CLI Setup and Version",
    commands: [
      {
        command: "az version",
        description: "Display the installed Azure CLI version and component versions.",
      },
      {
        command: "az --version",
        description: "Show Azure CLI version information.",
      },
      {
        command: "az upgrade",
        description: "Upgrade Azure CLI to the latest available version.",
      },
      {
        command: "az extension list",
        description: "List installed Azure CLI extensions.",
      },
      {
        command: "az extension add --name <extension>",
        description: "Install an Azure CLI extension.",
      },
      {
        command: "az extension update --name <extension>",
        description: "Update an installed Azure CLI extension.",
      },
      {
        command: "az extension remove --name <extension>",
        description: "Remove an Azure CLI extension.",
      },
    ],
  },

  {
    title: "Azure Login and Authentication",
    commands: [
      {
        command: "az login",
        description: "Sign in interactively to an Azure account.",
      },
      {
        command: "az login --use-device-code",
        description: "Authenticate using a device code.",
      },
      {
        command: "az logout",
        description: "Sign out from the current Azure account.",
      },
      {
        command: "az account show",
        description: "Display the currently selected Azure subscription.",
      },
      {
        command: "az account list",
        description: "List subscriptions available to the authenticated account.",
      },
      {
        command: "az account set --subscription <subscription-id>",
        description: "Set the active Azure subscription.",
      },
      {
        command: "az account clear",
        description: "Clear the current Azure account subscription cache.",
      },
    ],
  },

  {
    title: "Azure Resource Groups",
    commands: [
      {
        command: "az group list",
        description: "List Azure resource groups.",
      },
      {
        command: "az group show --name <resource-group>",
        description: "Display details about a resource group.",
      },
      {
        command: "az group create --name <resource-group> --location <location>",
        description: "Create a resource group in a specified Azure region.",
      },
      {
        command: "az group delete --name <resource-group>",
        description: "Delete a resource group and its resources.",
      },
      {
        command: "az group exists --name <resource-group>",
        description: "Check whether a resource group exists.",
      },
      {
        command: "az group deployment list --resource-group <resource-group>",
        description: "List deployments associated with a resource group.",
      },
    ],
  },

  {
    title: "Azure Virtual Machines",
    commands: [
      {
        command: "az vm list",
        description: "List virtual machines.",
      },
      {
        command: "az vm list --show-details",
        description: "List virtual machines with detailed information.",
      },
      {
        command: "az vm show --resource-group <resource-group> --name <vm-name>",
        description: "Show details for a virtual machine.",
      },
      {
        command:
          "az vm create --resource-group <resource-group> --name <vm-name> --image Ubuntu2204 --admin-username azureuser --generate-ssh-keys",
        description: "Create an Ubuntu virtual machine and generate SSH keys.",
      },
      {
        command:
          "az vm start --resource-group <resource-group> --name <vm-name>",
        description: "Start an Azure virtual machine.",
      },
      {
        command:
          "az vm stop --resource-group <resource-group> --name <vm-name>",
        description: "Stop an Azure virtual machine.",
      },
      {
        command:
          "az vm deallocate --resource-group <resource-group> --name <vm-name>",
        description: "Stop and deallocate a virtual machine to release compute resources.",
      },
      {
        command:
          "az vm restart --resource-group <resource-group> --name <vm-name>",
        description: "Restart a virtual machine.",
      },
      {
        command:
          "az vm delete --resource-group <resource-group> --name <vm-name>",
        description: "Delete a virtual machine.",
      },
      {
        command:
          "az vm list-ip-addresses --resource-group <resource-group> --name <vm-name>",
        description: "Display IP address information for a virtual machine.",
      },
      {
        command:
          "az vm open-port --resource-group <resource-group> --name <vm-name> --port <port>",
        description: "Create a network security rule allowing inbound traffic on a port.",
      },
      {
        command:
          "az vm run-command invoke --resource-group <resource-group> --name <vm-name> --command-id RunShellScript --scripts '<command>'",
        description: "Execute a shell command inside a Linux virtual machine.",
      },
    ],
  },

  {
    title: "Azure VM Images and Disks",
    commands: [
      {
        command: "az vm image list --location <location> --publisher Canonical --offer 0001-com-ubuntu-server-jammy --sku 22_04-lts --all",
        description: "List matching Ubuntu VM images.",
      },
      {
        command: "az disk list",
        description: "List managed disks.",
      },
      {
        command:
          "az disk show --resource-group <resource-group> --name <disk-name>",
        description: "Show details about a managed disk.",
      },
      {
        command:
          "az disk create --resource-group <resource-group> --name <disk-name> --size-gb 32",
        description: "Create a managed disk.",
      },
      {
        command:
          "az disk delete --resource-group <resource-group> --name <disk-name>",
        description: "Delete a managed disk.",
      },
    ],
  },

  {
    title: "Azure Storage Accounts",
    commands: [
      {
        command: "az storage account list",
        description: "List storage accounts.",
      },
      {
        command:
          "az storage account show --resource-group <resource-group> --name <storage-account>",
        description: "Show storage account details.",
      },
      {
        command:
          "az storage account create --resource-group <resource-group> --name <storage-account> --location <location> --sku Standard_LRS",
        description: "Create a storage account.",
      },
      {
        command:
          "az storage account delete --resource-group <resource-group> --name <storage-account>",
        description: "Delete a storage account.",
      },
      {
        command:
          "az storage account keys list --resource-group <resource-group> --account-name <storage-account>",
        description: "List access keys for a storage account.",
      },
    ],
  },

  {
    title: "Azure Blob Storage",
    commands: [
      {
        command:
          "az storage container list --account-name <storage-account> --auth-mode login",
        description: "List blob containers using Azure identity authentication.",
      },
      {
        command:
          "az storage container create --name <container> --account-name <storage-account> --auth-mode login",
        description: "Create a blob container.",
      },
      {
        command:
          "az storage blob list --container-name <container> --account-name <storage-account> --auth-mode login",
        description: "List blobs in a container.",
      },
      {
        command:
          "az storage blob upload --account-name <storage-account> --container-name <container> --name <blob> --file <file> --auth-mode login",
        description: "Upload a local file to Azure Blob Storage.",
      },
      {
        command:
          "az storage blob download --account-name <storage-account> --container-name <container> --name <blob> --file <file> --auth-mode login",
        description: "Download a blob to a local file.",
      },
      {
        command:
          "az storage blob delete --account-name <storage-account> --container-name <container> --name <blob> --auth-mode login",
        description: "Delete a blob.",
      },
    ],
  },

  {
    title: "Azure Virtual Network",
    commands: [
      {
        command: "az network vnet list",
        description: "List virtual networks.",
      },
      {
        command:
          "az network vnet show --resource-group <resource-group> --name <vnet-name>",
        description: "Show details for a virtual network.",
      },
      {
        command:
          "az network vnet create --resource-group <resource-group> --name <vnet-name> --address-prefix 10.0.0.0/16",
        description: "Create a virtual network.",
      },
      {
        command:
          "az network vnet subnet list --resource-group <resource-group> --vnet-name <vnet-name>",
        description: "List subnets in a virtual network.",
      },
      {
        command:
          "az network vnet subnet create --resource-group <resource-group> --vnet-name <vnet-name> --name <subnet-name> --address-prefix 10.0.1.0/24",
        description: "Create a subnet.",
      },
      {
        command:
          "az network vnet peering list --resource-group <resource-group> --vnet-name <vnet-name>",
        description: "List VNet peerings.",
      },
    ],
  },

  {
    title: "Azure Network Security Groups",
    commands: [
      {
        command: "az network nsg list",
        description: "List network security groups.",
      },
      {
        command:
          "az network nsg show --resource-group <resource-group> --name <nsg-name>",
        description: "Show an NSG and its configuration.",
      },
      {
        command:
          "az network nsg create --resource-group <resource-group> --name <nsg-name>",
        description: "Create a network security group.",
      },
      {
        command:
          "az network nsg rule list --resource-group <resource-group> --nsg-name <nsg-name>",
        description: "List security rules in an NSG.",
      },
      {
        command:
          "az network nsg rule create --resource-group <resource-group> --nsg-name <nsg-name> --name <rule-name> --priority 100 --access Allow --protocol Tcp --direction Inbound --destination-port-ranges 22",
        description: "Create an inbound NSG rule allowing TCP traffic on a port.",
      },
    ],
  },

  {
    title: "Azure Public IP and Networking",
    commands: [
      {
        command: "az network public-ip list",
        description: "List public IP addresses.",
      },
      {
        command:
          "az network public-ip show --resource-group <resource-group> --name <public-ip>",
        description: "Show public IP details.",
      },
      {
        command:
          "az network public-ip create --resource-group <resource-group> --name <public-ip> --sku Standard",
        description: "Create a public IP address.",
      },
      {
        command: "az network nic list",
        description: "List network interfaces.",
      },
      {
        command:
          "az network nic show --resource-group <resource-group> --name <nic-name>",
        description: "Show network interface details.",
      },
    ],
  },

  {
    title: "Azure Load Balancer",
    commands: [
      {
        command: "az network lb list",
        description: "List Azure load balancers.",
      },
      {
        command:
          "az network lb show --resource-group <resource-group> --name <load-balancer>",
        description: "Show load balancer details.",
      },
      {
        command:
          "az network lb rule list --resource-group <resource-group> --lb-name <load-balancer>",
        description: "List load-balancing rules.",
      },
      {
        command:
          "az network lb probe list --resource-group <resource-group> --lb-name <load-balancer>",
        description: "List health probes.",
      },
    ],
  },

  {
    title: "Azure Container Registry",
    commands: [
      {
        command: "az acr list",
        description: "List Azure Container Registries.",
      },
      {
        command:
          "az acr show --name <registry>",
        description: "Show details for an Azure Container Registry.",
      },
      {
        command:
          "az acr create --resource-group <resource-group> --name <registry> --sku Basic",
        description: "Create an Azure Container Registry.",
      },
      {
        command:
          "az acr login --name <registry>",
        description: "Authenticate Docker with an Azure Container Registry.",
      },
      {
        command:
          "az acr repository list --name <registry>",
        description: "List repositories in an Azure Container Registry.",
      },
      {
        command:
          "az acr repository show-tags --name <registry> --repository <repository>",
        description: "List image tags in an ACR repository.",
      },
      {
        command:
          "az acr build --registry <registry> --image <repository>:<tag> .",
        description: "Build a container image in Azure Container Registry.",
      },
    ],
  },

  {
    title: "Azure Kubernetes Service",
    commands: [
      {
        command: "az aks list",
        description: "List Azure Kubernetes Service clusters.",
      },
      {
        command:
          "az aks show --resource-group <resource-group> --name <aks-cluster>",
        description: "Show AKS cluster details.",
      },
      {
        command:
          "az aks create --resource-group <resource-group> --name <aks-cluster> --node-count 2 --generate-ssh-keys",
        description: "Create an AKS cluster with two nodes.",
      },
      {
        command:
          "az aks scale --resource-group <resource-group> --name <aks-cluster> --node-count 3",
        description: "Change the node count of an AKS cluster.",
      },
      {
        command:
          "az aks get-credentials --resource-group <resource-group> --name <aks-cluster>",
        description: "Download AKS credentials and merge them into the local kubeconfig.",
      },
      {
        command:
          "az aks stop --resource-group <resource-group> --name <aks-cluster>",
        description: "Stop an AKS cluster where supported.",
      },
      {
        command:
          "az aks start --resource-group <resource-group> --name <aks-cluster>",
        description: "Start a stopped AKS cluster.",
      },
      {
        command:
          "az aks nodepool list --resource-group <resource-group> --cluster-name <aks-cluster>",
        description: "List node pools in an AKS cluster.",
      },
    ],
  },

  {
    title: "Azure Container Instances",
    commands: [
      {
        command: "az container list",
        description: "List Azure Container Instances.",
      },
      {
        command:
          "az container show --resource-group <resource-group> --name <container>",
        description: "Show container instance details.",
      },
      {
        command:
          "az container logs --resource-group <resource-group> --name <container>",
        description: "Display logs from a container instance.",
      },
      {
        command:
          "az container restart --resource-group <resource-group> --name <container>",
        description: "Restart a container instance.",
      },
      {
        command:
          "az container delete --resource-group <resource-group> --name <container>",
        description: "Delete a container instance.",
      },
    ],
  },

  {
    title: "Azure App Service",
    commands: [
      {
        command: "az webapp list",
        description: "List Azure App Service web apps.",
      },
      {
        command:
          "az webapp show --resource-group <resource-group> --name <webapp>",
        description: "Show details for a web app.",
      },
      {
        command:
          "az webapp create --resource-group <resource-group> --plan <app-service-plan> --name <webapp>",
        description: "Create a web app using an existing App Service plan.",
      },
      {
        command:
          "az webapp start --resource-group <resource-group> --name <webapp>",
        description: "Start a web app.",
      },
      {
        command:
          "az webapp stop --resource-group <resource-group> --name <webapp>",
        description: "Stop a web app.",
      },
      {
        command:
          "az webapp restart --resource-group <resource-group> --name <webapp>",
        description: "Restart a web app.",
      },
      {
        command:
          "az webapp log tail --resource-group <resource-group> --name <webapp>",
        description: "Stream application logs from a web app.",
      },
    ],
  },

  {
    title: "Azure App Service Deployment",
    commands: [
      {
        command:
          "az webapp deployment list-publishing-profiles --resource-group <resource-group> --name <webapp>",
        description: "List publishing profiles for an App Service application.",
      },
      {
        command:
          "az webapp deployment source config --resource-group <resource-group> --name <webapp> --repo-url <repository-url> --branch <branch>",
        description: "Configure source deployment from a repository.",
      },
      {
        command:
          "az webapp deployment list-publishing-profiles --resource-group <resource-group> --name <webapp>",
        description: "Retrieve publishing profile information for deployment workflows.",
      },
    ],
  },

  {
    title: "Azure Functions",
    commands: [
      {
        command: "az functionapp list",
        description: "List Azure Function Apps.",
      },
      {
        command:
          "az functionapp show --resource-group <resource-group> --name <function-app>",
        description: "Show details about a Function App.",
      },
      {
        command:
          "az functionapp start --resource-group <resource-group> --name <function-app>",
        description: "Start a Function App.",
      },
      {
        command:
          "az functionapp stop --resource-group <resource-group> --name <function-app>",
        description: "Stop a Function App.",
      },
      {
        command:
          "az functionapp restart --resource-group <resource-group> --name <function-app>",
        description: "Restart a Function App.",
      },
      {
        command:
          "az functionapp log tail --resource-group <resource-group> --name <function-app>",
        description: "Stream logs from an Azure Function App.",
      },
    ],
  },

  {
    title: "Azure SQL",
    commands: [
      {
        command: "az sql server list",
        description: "List Azure SQL logical servers.",
      },
      {
        command:
          "az sql server show --resource-group <resource-group> --name <server>",
        description: "Show Azure SQL server details.",
      },
      {
        command:
          "az sql db list --resource-group <resource-group> --server <server>",
        description: "List databases on an Azure SQL server.",
      },
      {
        command:
          "az sql db show --resource-group <resource-group> --server <server> --name <database>",
        description: "Show details for an Azure SQL database.",
      },
      {
        command:
          "az sql db create --resource-group <resource-group> --server <server> --name <database> --service-objective S0",
        description: "Create an Azure SQL database.",
      },
      {
        command:
          "az sql db delete --resource-group <resource-group> --server <server> --name <database>",
        description: "Delete an Azure SQL database.",
      },
    ],
  },

  {
    title: "Azure Monitor",
    commands: [
      {
        command: "az monitor metrics list-definitions --resource <resource-id>",
        description: "List available metrics for an Azure resource.",
      },
      {
        command:
          "az monitor metrics list --resource <resource-id>",
        description: "Retrieve metrics for an Azure resource.",
      },
      {
        command:
          "az monitor activity-log list --resource-group <resource-group>",
        description: "List Azure activity log events for a resource group.",
      },
      {
        command:
          "az monitor activity-log list --status Failed",
        description: "List failed activity log events.",
      },
    ],
  },

  {
    title: "Azure Log Analytics",
    commands: [
      {
        command: "az monitor log-analytics workspace list",
        description: "List Log Analytics workspaces.",
      },
      {
        command:
          "az monitor log-analytics workspace show --resource-group <resource-group> --workspace-name <workspace>",
        description: "Show Log Analytics workspace details.",
      },
      {
        command:
          "az monitor log-analytics query --workspace <workspace-id> --analytics-query '<KQL-query>'",
        description: "Run a Kusto Query Language query against a Log Analytics workspace.",
      },
    ],
  },

  {
    title: "Azure Key Vault",
    commands: [
      {
        command: "az keyvault list",
        description: "List Azure Key Vaults.",
      },
      {
        command:
          "az keyvault show --name <vault>",
        description: "Show Key Vault details.",
      },
      {
        command:
          "az keyvault create --name <vault> --resource-group <resource-group> --location <location>",
        description: "Create an Azure Key Vault.",
      },
      {
        command:
          "az keyvault secret list --vault-name <vault>",
        description: "List secrets stored in a Key Vault.",
      },
      {
        command:
          "az keyvault secret show --vault-name <vault> --name <secret>",
        description: "Retrieve metadata and the current value of a Key Vault secret when authorized.",
      },
      {
        command:
          "az keyvault secret set --vault-name <vault> --name <secret> --value '<value>'",
        description: "Create or update a Key Vault secret.",
      },
      {
        command:
          "az keyvault secret delete --vault-name <vault> --name <secret>",
        description: "Delete a Key Vault secret.",
      },
    ],
  },

  {
    title: "Azure Managed Identity",
    commands: [
      {
        command: "az identity list",
        description: "List user-assigned managed identities.",
      },
      {
        command:
          "az identity show --resource-group <resource-group> --name <identity>",
        description: "Show a user-assigned managed identity.",
      },
      {
        command:
          "az identity create --resource-group <resource-group> --name <identity>",
        description: "Create a user-assigned managed identity.",
      },
      {
        command:
          "az identity delete --resource-group <resource-group> --name <identity>",
        description: "Delete a user-assigned managed identity.",
      },
    ],
  },

  {
    title: "Microsoft Entra ID",
    commands: [
      {
        command: "az ad signed-in-user show",
        description: "Display information about the currently signed-in Microsoft Entra user.",
      },
      {
        command: "az ad user list",
        description: "List Microsoft Entra users when authorized.",
      },
      {
        command:
          "az ad user show --id <user>",
        description: "Show information about a Microsoft Entra user.",
      },
      {
        command:
          "az ad group list",
        description: "List Microsoft Entra groups.",
      },
      {
        command:
          "az ad sp list --display-name <name>",
        description: "Find service principals by display name.",
      },
    ],
  },

  {
    title: "Azure Role-Based Access Control",
    commands: [
      {
        command: "az role definition list",
        description: "List Azure RBAC role definitions.",
      },
      {
        command:
          "az role definition list --name Contributor",
        description: "Show the Contributor role definition.",
      },
      {
        command:
          "az role assignment list --assignee <principal-id>",
        description: "List role assignments for a user, group or service principal.",
      },
      {
        command:
          "az role assignment create --assignee <principal-id> --role Contributor --scope <scope>",
        description: "Assign an Azure RBAC role at a specified scope.",
      },
      {
        command:
          "az role assignment delete --assignee <principal-id> --role Contributor --scope <scope>",
        description: "Remove an Azure RBAC role assignment.",
      },
    ],
  },

  {
    title: "Azure Resource Management",
    commands: [
      {
        command: "az resource list",
        description: "List Azure resources in the current subscription.",
      },
      {
        command:
          "az resource show --resource-group <resource-group> --name <resource-name> --resource-type <resource-type>",
        description: "Show details for an Azure resource.",
      },
      {
        command:
          "az resource tag --tags environment=production team=devops",
        description: "Apply tags to Azure resources.",
      },
      {
        command:
          "az resource delete --ids <resource-id>",
        description: "Delete a resource by resource ID.",
      },
    ],
  },

  {
    title: "Azure Resource Locks",
    commands: [
      {
        command: "az lock list --resource-group <resource-group>",
        description: "List management locks in a resource group.",
      },
      {
        command:
          "az lock create --name <lock-name> --lock-type CanNotDelete --resource-group <resource-group>",
        description: "Create a resource lock that prevents deletion.",
      },
      {
        command:
          "az lock delete --name <lock-name> --resource-group <resource-group>",
        description: "Delete a management lock.",
      },
    ],
  },

  {
    title: "Azure Policy",
    commands: [
      {
        command: "az policy definition list",
        description: "List Azure Policy definitions.",
      },
      {
        command:
          "az policy assignment list",
        description: "List Azure Policy assignments.",
      },
      {
        command:
          "az policy state list",
        description: "List policy compliance state information.",
      },
      {
        command:
          "az policy state summarize",
        description: "Summarize Azure Policy compliance.",
      },
    ],
  },

  {
    title: "Azure Resource Graph",
    commands: [
      {
        command:
          "az graph query -q 'Resources | project name, type, resourceGroup, location'",
        description: "Query Azure resources using Azure Resource Graph.",
      },
      {
        command:
          "az graph query -q 'Resources | where type =~ \"Microsoft.Compute/virtualMachines\" | project name, resourceGroup, location'",
        description: "Find virtual machines using Resource Graph.",
      },
      {
        command:
          "az graph query -q 'Resources | summarize count() by type'",
        description: "Count Azure resources by resource type.",
      },
    ],
  },

  {
    title: "Azure Cost Management",
    commands: [
      {
        command: "az consumption usage list",
        description: "List usage details when supported for the subscription and billing configuration.",
      },
      {
        command:
          "az consumption budget list --resource-group <resource-group>",
        description: "List budgets associated with a resource group where supported.",
      },
      {
        command:
          "az consumption budget show --resource-group <resource-group> --budget-name <budget>",
        description: "Show budget details.",
      },
    ],
  },

  {
    title: "Azure DevOps",
    commands: [
      {
        command: "az extension add --name azure-devops",
        description: "Install the Azure DevOps CLI extension.",
      },
      {
        command:
          "az devops configure --defaults organization=https://dev.azure.com/<organization> project=<project>",
        description: "Configure default Azure DevOps organization and project.",
      },
      {
        command: "az devops project list",
        description: "List Azure DevOps projects.",
      },
      {
        command:
          "az repos list",
        description: "List Git repositories in the configured Azure DevOps project.",
      },
      {
        command:
          "az repos show --repository <repository>",
        description: "Show Azure Repos repository details.",
      },
      {
        command:
          "az pipelines list",
        description: "List Azure Pipelines.",
      },
      {
        command:
          "az pipelines run --name <pipeline>",
        description: "Run an Azure Pipeline.",
      },
      {
        command:
          "az pipelines runs list",
        description: "List pipeline runs.",
      },
    ],
  },

  {
    title: "Azure Container Apps",
    commands: [
      {
        command: "az containerapp list",
        description: "List Azure Container Apps.",
      },
      {
        command:
          "az containerapp show --resource-group <resource-group> --name <container-app>",
        description: "Show Azure Container App details.",
      },
      {
        command:
          "az containerapp revision list --resource-group <resource-group> --name <container-app>",
        description: "List revisions of a Container App.",
      },
      {
        command:
          "az containerapp logs show --resource-group <resource-group> --name <container-app>",
        description: "Show Container App logs.",
      },
      {
        command:
          "az containerapp revision restart --resource-group <resource-group> --name <container-app> --revision <revision>",
        description: "Restart a Container App revision.",
      },
    ],
  },

  {
    title: "Azure DNS",
    commands: [
      {
        command: "az network dns zone list",
        description: "List Azure DNS zones.",
      },
      {
        command:
          "az network dns zone show --resource-group <resource-group> --name <zone>",
        description: "Show an Azure DNS zone.",
      },
      {
        command:
          "az network dns record-set list --resource-group <resource-group> --zone-name <zone>",
        description: "List DNS record sets.",
      },
      {
        command:
          "az network dns record-set a add-record --resource-group <resource-group> --zone-name <zone> --record-set-name <record-set> --ipv4-address <ip>",
        description: "Add an IPv4 address to an A record set.",
      },
    ],
  },

  {
    title: "Azure CLI Output and Querying",
    commands: [
      {
        command: "az <command> --output table",
        description: "Display command output in a readable table.",
      },
      {
        command: "az <command> --output json",
        description: "Return command output as JSON.",
      },
      {
        command: "az <command> --output yaml",
        description: "Return command output as YAML.",
      },
      {
        command: "az <command> --output tsv",
        description: "Return command output as tab-separated values.",
      },
      {
        command: "az <command> --query '<JMESPath-expression>'",
        description: "Filter and transform Azure CLI output using JMESPath.",
      },
      {
        command: "az <command> --only-show-errors",
        description: "Suppress non-error output where supported.",
      },
    ],
  },

  {
    title: "Azure CLI Troubleshooting",
    commands: [
      {
        command: "az account show",
        description: "Verify the active Azure account and subscription.",
      },
      {
        command: "az account list --output table",
        description: "Check which subscriptions are available.",
      },
      {
        command: "az account set --subscription <subscription-id>",
        description: "Switch to the correct Azure subscription.",
      },
      {
        command: "az group list --output table",
        description: "Verify resource-group access.",
      },
      {
        command: "az provider list --output table",
        description: "List Azure resource providers and their registration state.",
      },
      {
        command:
          "az provider show --namespace Microsoft.Compute",
        description: "Check the registration state of a specific Azure resource provider.",
      },
      {
        command: "az config get",
        description: "Display Azure CLI configuration settings.",
      },
      {
        command: "az config set core.only_show_errors=true",
        description: "Configure Azure CLI to show only errors.",
      },
    ],
  },

  {
    title: "CI/CD Azure DevOps Workflow",
    commands: [
      {
        command: "az login",
        description: "Authenticate to Azure before deployment.",
      },
      {
        command: "az account set --subscription <subscription-id>",
        description: "Select the subscription used by the deployment pipeline.",
      },
      {
        command:
          "az group create --name <resource-group> --location <location>",
        description: "Create or ensure the deployment resource group exists.",
      },
      {
        command:
          "az acr build --registry <registry> --image <repository>:<tag> .",
        description: "Build and publish a container image using Azure Container Registry.",
      },
      {
        command:
          "az aks get-credentials --resource-group <resource-group> --name <aks-cluster>",
        description: "Configure kubectl access to an AKS cluster.",
      },
      {
        command:
          "az webapp deploy --resource-group <resource-group> --name <webapp> --src-path <package>",
        description: "Deploy an application package to Azure App Service.",
      },
      {
        command:
          "az monitor activity-log list --resource-group <resource-group>",
        description: "Inspect Azure activity logs after a deployment.",
      },
    ],
  },
];

export default function AzureCliPage() {
  const totalCommands = commandSections.reduce(
    (total, section) => total + section.commands.length,
    0,
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            DevOps • Cloud • Azure
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Azure CLI Commands Cheat Sheet
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Practical Azure CLI commands for virtual machines, storage,
            networking, AKS, containers, App Service, Azure Functions, SQL,
            monitoring, identity and DevOps automation.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-400">
            <span className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2">
              {commandSections.length} categories
            </span>

            <span className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2">
              {totalCommands} commands
            </span>

            <span className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2">
              Azure DevOps
            </span>
          </div>
        </div>

        <AzureCommandSearch sections={commandSections} />

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">
            Azure DevOps Workflow
          </h2>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <ol className="space-y-5">
              <li>
                <span className="font-semibold text-cyan-400">1. Authenticate</span>
                <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-300">
                  <code>az login</code>
                </pre>
              </li>

              <li>
                <span className="font-semibold text-cyan-400">
                  2. Select subscription
                </span>
                <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-300">
                  <code>az account set --subscription &lt;subscription-id&gt;</code>
                </pre>
              </li>

              <li>
                <span className="font-semibold text-cyan-400">
                  3. Build container image
                </span>
                <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-300">
                  <code>
                    az acr build --registry &lt;registry&gt; --image myapp:$BUILD_NUMBER .
                  </code>
                </pre>
              </li>

              <li>
                <span className="font-semibold text-cyan-400">
                  4. Deploy to AKS
                </span>
                <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-300">
                  <code>
                    az aks get-credentials --resource-group &lt;resource-group&gt; --name &lt;aks-cluster&gt;
                  </code>
                </pre>
              </li>

              <li>
                <span className="font-semibold text-cyan-400">
                  5. Verify deployment
                </span>
                <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-300">
                  <code>kubectl get pods</code>
                </pre>
              </li>

              <li>
                <span className="font-semibold text-cyan-400">
                  6. Check Azure monitoring
                </span>
                <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-300">
                  <code>
                    az monitor activity-log list --resource-group &lt;resource-group&gt;
                  </code>
                </pre>
              </li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-bold">
            Common Azure CLI Troubleshooting Workflow
          </h2>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <div className="space-y-5 text-slate-300">
              <div>
                <p className="font-semibold text-white">
                  Check authentication
                </p>

                <code className="mt-2 block overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-cyan-400">
                  az account show
                </code>
              </div>

              <div>
                <p className="font-semibold text-white">
                  Check subscription
                </p>

                <code className="mt-2 block overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-cyan-400">
                  az account list --output table
                </code>
              </div>

              <div>
                <p className="font-semibold text-white">
                  Check resource group
                </p>

                <code className="mt-2 block overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-cyan-400">
                  az group show --name &lt;resource-group&gt;
                </code>
              </div>

              <div>
                <p className="font-semibold text-white">
                  Check resource provider
                </p>

                <code className="mt-2 block overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-cyan-400">
                  az provider show --namespace Microsoft.Compute
                </code>
              </div>

              <div>
                <p className="font-semibold text-white">
                  Inspect activity logs
                </p>

                <code className="mt-2 block overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-cyan-400">
                  az monitor activity-log list --status Failed
                </code>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}