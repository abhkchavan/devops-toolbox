import OciCommandSearch from "./OciCommandSearch";

export const metadata = {
  title: "OCI CLI Commands Cheat Sheet | DevOpsCommands",
  description:
    "Practical Oracle Cloud Infrastructure OCI CLI commands for Compute, Object Storage, VCN, OKE, Load Balancer, IAM, Vault, Logging, Monitoring, Databases and DevOps workflows.",
};

const commandSections = [
  {
    title: "OCI CLI Setup and Version",
    commands: [
      {
        command: "oci --version",
        description: "Display the installed OCI CLI version.",
      },
      {
        command: "oci -v",
        description: "Short form for displaying the OCI CLI version.",
      },
      {
        command: "oci --help",
        description: "Display global OCI CLI help.",
      },
      {
        command: "oci -h",
        description: "Short form for OCI CLI help.",
      },
      {
        command: "oci -i",
        description:
          "Enable interactive mode with command completion and parameter suggestions.",
      },
      {
        command: "oci --latest-version",
        description: "Display the latest available OCI CLI version.",
      },
    ],
  },

  {
    title: "OCI CLI Installation",
    commands: [
      {
        command:
          "bash -c \"$(curl -L https://raw.githubusercontent.com/oracle/oci-cli/master/scripts/install/install.sh)\"",
        description: "Install OCI CLI on Linux or Unix-like systems.",
      },
      {
        command:
          "bash -c \"$(curl -L https://raw.githubusercontent.com/oracle/oci-cli/master/scripts/install/install.sh)\" -- --accept-all-defaults",
        description:
          "Install OCI CLI while accepting the installation script defaults.",
      },
      {
        
            command:
              "iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/oracle/oci-cli/master/scripts/install/install.ps1'))",
            description:
              "Install the OCI CLI on Windows using the official installer.",
          },
      {
        command: "brew install oci-cli",
        description: "Install OCI CLI using Homebrew on macOS.",
      },
      {
        command: "oci --help",
        description: "Verify that OCI CLI is available after installation.",
      },
    ],
  },

  {
    title: "OCI Configuration and Profiles",
    commands: [
      {
        command: "oci setup config",
        description:
          "Create or configure the OCI CLI configuration file and API key authentication.",
      },
      {
        command: "oci setup repair-file-permissions --file ~/.oci/config",
        description:
          "Repair permissions on an OCI CLI configuration file.",
      },
      {
        command: "oci iam region list",
        description: "List OCI regions available to the tenancy.",
      },
      {
        command: "oci iam region-subscription list --tenancy-id <tenancy_ocid>",
        description: "List regions subscribed by a tenancy.",
      },
      {
        command: "oci --profile DEFAULT iam region list",
        description: "Run an OCI command using a specific configuration profile.",
      },
    ],
  },

  {
    title: "OCI Authentication",
    commands: [
      {
        command: "oci session authenticate",
        description:
          "Authenticate using an OCI CLI session and browser-based login.",
      },
      {
        command: "oci iam user get --user-id <user_ocid>",
        description: "Retrieve details about an IAM user.",
      },
      {
        command: "oci iam tenancy get --tenancy-id <tenancy_ocid>",
        description: "Retrieve tenancy information.",
      },
      {
        command: "oci iam availability-domain list --compartment-id <compartment_ocid>",
        description: "List availability domains available in a compartment.",
      },
      {
        command: "oci --auth instance_principal compute instance list --compartment-id <compartment_ocid>",
        description:
          "Authenticate using an instance principal when running from an OCI instance.",
      },
    ],
  },

  {
    title: "OCI Compartments",
    commands: [
      {
        command: "oci iam compartment list --compartment-id-in-subtree true",
        description: "List compartments recursively under the tenancy.",
      },
      {
        command:
          "oci iam compartment get --compartment-id <compartment_ocid>",
        description: "Get details about a compartment.",
      },
      {
        command:
          "oci iam compartment create --compartment-id <parent_compartment_ocid> --name <name> --description <description>",
        description: "Create a new compartment.",
      },
      {
        command:
          "oci iam compartment update --compartment-id <compartment_ocid> --name <new_name>",
        description: "Update a compartment.",
      },
      {
        command:
          "oci iam compartment delete --compartment-id <compartment_ocid>",
        description: "Delete a compartment.",
      },
    ],
  },

  {
    title: "OCI Compute Instances",
    commands: [
      {
        command:
          "oci compute instance list --compartment-id <compartment_ocid>",
        description: "List compute instances in a compartment.",
      },
      {
        command:
          "oci compute instance get --instance-id <instance_ocid>",
        description: "Get details about a compute instance.",
      },
      {
        command:
          "oci compute instance launch --compartment-id <compartment_ocid> --availability-domain <availability_domain> --subnet-id <subnet_ocid> --shape <shape> --image-id <image_ocid>",
        description: "Launch a compute instance.",
      },
      {
        command:
          "oci compute instance start --instance-id <instance_ocid>",
        description: "Start a stopped compute instance.",
      },
      {
        command:
          "oci compute instance stop --instance-id <instance_ocid>",
        description: "Stop a running compute instance.",
      },
      {
        command:
          "oci compute instance reboot --instance-id <instance_ocid>",
        description: "Reboot a compute instance.",
      },
      {
        command:
          "oci compute instance terminate --instance-id <instance_ocid>",
        description: "Terminate a compute instance.",
      },
      {
        command:
          "oci compute instance action --instance-id <instance_ocid> --action softreset",
        description: "Perform a supported lifecycle action on an instance.",
      },
    ],
  },

  {
    title: "OCI Compute Images",
    commands: [
      {
        command:
          "oci compute image list --compartment-id <compartment_ocid>",
        description: "List compute images available in a compartment.",
      },
      {
        command:
          "oci compute image get --image-id <image_ocid>",
        description: "Get details about a compute image.",
      },
      {
        command:
          "oci compute image list --compartment-id <compartment_ocid> --operating-system <operating_system>",
        description: "Filter images by operating system.",
      },
      {
        command:
          "oci compute instance-image list --compartment-id <compartment_ocid>",
        description: "List custom instance images.",
      },
    ],
  },

  {
    title: "OCI Block Volumes",
    commands: [
      {
        command:
          "oci bv volume list --compartment-id <compartment_ocid>",
        description: "List block volumes.",
      },
      {
        command:
          "oci bv volume get --volume-id <volume_ocid>",
        description: "Get block volume details.",
      },
      {
        command:
          "oci bv volume create --compartment-id <compartment_ocid> --availability-domain <availability_domain> --size-in-gbs <size>",
        description: "Create a block volume.",
      },
      {
        command:
          "oci compute volume-attachment list --compartment-id <compartment_ocid> --instance-id <instance_ocid>",
        description: "List volumes attached to a compute instance.",
      },
      {
        command:
          "oci compute volume-attachment attach-paravirtualized-volume --instance-id <instance_ocid> --volume-id <volume_ocid>",
        description: "Attach a block volume to a compute instance.",
      },
      {
        command:
          "oci bv volume delete --volume-id <volume_ocid>",
        description: "Delete a block volume.",
      },
    ],
  },

  {
    title: "OCI Object Storage",
    commands: [
      {
        command:
          "oci os ns get",
        description: "Get the Object Storage namespace for the tenancy.",
      },
      {
        command:
          "oci os bucket list --compartment-id <compartment_ocid>",
        description: "List Object Storage buckets.",
      },
      {
        command:
          "oci os bucket get --bucket-name <bucket_name> --namespace-name <namespace>",
        description: "Get details about an Object Storage bucket.",
      },
      {
        command:
          "oci os bucket create --compartment-id <compartment_ocid> --name <bucket_name> --namespace-name <namespace>",
        description: "Create an Object Storage bucket.",
      },
      {
        command:
          "oci os object list --bucket-name <bucket_name> --namespace-name <namespace>",
        description: "List objects in a bucket.",
      },
      {
        command:
          "oci os object put --bucket-name <bucket_name> --file <file_path> --name <object_name> --namespace-name <namespace>",
        description: "Upload a local file to Object Storage.",
      },
      {
        command:
          "oci os object get --bucket-name <bucket_name> --name <object_name> --file <output_file> --namespace-name <namespace>",
        description: "Download an object from Object Storage.",
      },
      {
        command:
          "oci os object delete --bucket-name <bucket_name> --name <object_name> --namespace-name <namespace>",
        description: "Delete an object from Object Storage.",
      },
    ],
  },

  {
    title: "OCI VCN Networking",
    commands: [
      {
        command:
          "oci network vcn list --compartment-id <compartment_ocid>",
        description: "List Virtual Cloud Networks.",
      },
      {
        command:
          "oci network vcn get --vcn-id <vcn_ocid>",
        description: "Get VCN details.",
      },
      {
        command:
          "oci network vcn create --compartment-id <compartment_ocid> --cidr-block <cidr>",
        description: "Create a VCN with an IPv4 CIDR block.",
      },
      {
        command:
          "oci network subnet list --compartment-id <compartment_ocid> --vcn-id <vcn_ocid>",
        description: "List subnets in a VCN.",
      },
      {
        command:
          "oci network subnet get --subnet-id <subnet_ocid>",
        description: "Get subnet details.",
      },
      {
        command:
          "oci network subnet create --compartment-id <compartment_ocid> --vcn-id <vcn_ocid> --cidr-block <cidr>",
        description: "Create a subnet.",
      },
      {
        command:
          "oci network vcn delete --vcn-id <vcn_ocid>",
        description: "Delete a VCN.",
      },
    ],
  },

  {
    title: "OCI Internet Gateways and Routes",
    commands: [
      {
        command:
          "oci network internet-gateway list --compartment-id <compartment_ocid> --vcn-id <vcn_ocid>",
        description: "List internet gateways in a VCN.",
      },
      {
        command:
          "oci network internet-gateway create --compartment-id <compartment_ocid> --vcn-id <vcn_ocid> --is-enabled true --display-name <name>",
        description: "Create and enable an internet gateway.",
      },
      {
        command:
          "oci network route-table list --compartment-id <compartment_ocid> --vcn-id <vcn_ocid>",
        description: "List route tables.",
      },
      {
        command:
          "oci network route-table get --rt-id <route_table_ocid>",
        description: "Get route table details.",
      },
      {
        command:
          "oci network route-table update --rt-id <route_table_ocid> --route-rules <route_rules_json>",
        description: "Update route rules.",
      },
    ],
  },

  {
    title: "OCI Security Lists and NSGs",
    commands: [
      {
        command:
          "oci network security-list list --compartment-id <compartment_ocid> --vcn-id <vcn_ocid>",
        description: "List VCN security lists.",
      },
      {
        command:
          "oci network security-list get --security-list-id <security_list_ocid>",
        description: "Get security list details.",
      },
      {
        command:
          "oci network nsg list --compartment-id <compartment_ocid> --vcn-id <vcn_ocid>",
        description: "List network security groups.",
      },
      {
        command:
          "oci network nsg get --nsg-id <nsg_ocid>",
        description: "Get NSG details.",
      },
      {
        command:
          "oci network nsg create --compartment-id <compartment_ocid> --vcn-id <vcn_ocid>",
        description: "Create a network security group.",
      },
      {
        command:
          "oci network nsg rules add --nsg-id <nsg_ocid> --security-rules <rules_json>",
        description: "Add rules to a network security group.",
      },
    ],
  },

  {
    title: "OCI Public IP",
    commands: [
      {
        command:
          "oci network public-ip list --compartment-id <compartment_ocid>",
        description: "List public IP resources.",
      },
      {
        command:
          "oci network public-ip get --public-ip-id <public_ip_ocid>",
        description: "Get public IP details.",
      },
      {
        command:
          "oci network public-ip create --compartment-id <compartment_ocid> --lifetime RESERVED",
        description: "Create a reserved public IP.",
      },
      {
        command:
          "oci network public-ip delete --public-ip-id <public_ip_ocid>",
        description: "Delete a public IP.",
      },
    ],
  },

  {
    title: "OCI Load Balancer",
    commands: [
      {
        command:
          "oci lb load-balancer list --compartment-id <compartment_ocid>",
        description: "List load balancers.",
      },
      {
        command:
          "oci lb load-balancer get --load-balancer-id <load_balancer_ocid>",
        description: "Get load balancer details.",
      },
      {
        command:
          "oci lb backend-set list --load-balancer-id <load_balancer_ocid>",
        description: "List backend sets.",
      },
      {
        command:
          "oci lb backend list --load-balancer-id <load_balancer_ocid> --backend-set-name <backend_set_name>",
        description: "List load balancer backends.",
      },
      {
        command:
          "oci lb listener list --load-balancer-id <load_balancer_ocid>",
        description: "List load balancer listeners.",
      },
      {
        command:
          "oci lb load-balancer delete --load-balancer-id <load_balancer_ocid>",
        description: "Delete a load balancer.",
      },
    ],
  },

  {
    title: "OKE Kubernetes",
    commands: [
      {
        command:
          "oci ce cluster list --compartment-id <compartment_ocid>",
        description: "List OKE Kubernetes clusters.",
      },
      {
        command:
          "oci ce cluster get --cluster-id <cluster_ocid>",
        description: "Get OKE cluster details.",
      },
      {
        command:
          "oci ce cluster create-k8s-object-storage-uri --cluster-id <cluster_ocid>",
        description:
          "Create an object storage URI for Kubernetes cluster configuration or related operations.",
      },
      {
        command:
          "oci ce node-pool list --compartment-id <compartment_ocid>",
        description: "List OKE node pools.",
      },
      {
        command:
          "oci ce node-pool get --node-pool-id <node_pool_ocid>",
        description: "Get OKE node pool details.",
      },
      {
        command:
          "oci ce node-pool list --cluster-id <cluster_ocid> --compartment-id <compartment_ocid>",
        description: "List node pools belonging to an OKE cluster.",
      },
    ],
  },

  {
    title: "OKE Kubernetes Kubeconfig",
    commands: [
      {
        command:
          "oci ce cluster create-kubeconfig --cluster-id <cluster_ocid> --file $HOME/.kube/config",
        description:
          "Generate a kubeconfig file for an OKE cluster.",
      },
      {
        command:
          "oci ce cluster create-kubeconfig --cluster-id <cluster_ocid> --file $HOME/.kube/config --region <region>",
        description:
          "Generate an OKE kubeconfig while explicitly selecting a region.",
      },
      {
        command:
          "kubectl get nodes",
        description: "Verify that Kubernetes nodes are accessible after configuring kubeconfig.",
      },
      {
        command:
          "kubectl get pods -A",
        description: "List pods across all Kubernetes namespaces.",
      },
    ],
  },

  {
    title: "OCI Container Registry",
    commands: [
      {
        command:
          "oci artifacts container repository list --compartment-id <compartment_ocid>",
        description: "List container repositories in Artifact Registry.",
      },
      {
        command:
          "oci artifacts container repository get --repository-id <repository_ocid>",
        description: "Get container repository details.",
      },
      {
        command:
          "oci artifacts container image list --compartment-id <compartment_ocid>",
        description: "List container images.",
      },
      {
        command:
          "oci artifacts container image get --image-id <image_ocid>",
        description: "Get container image details.",
      },
      {
        command:
          "docker login <region-key>.ocir.io",
        description:
          "Authenticate Docker to an OCI Container Registry endpoint using appropriate OCI credentials.",
      },
    ],
  },

  {
    title: "OCI IAM Users and Groups",
    commands: [
      {
        command:
          "oci iam user list --compartment-id <tenancy_ocid>",
        description: "List IAM users.",
      },
      {
        command:
          "oci iam user get --user-id <user_ocid>",
        description: "Get IAM user details.",
      },
      {
        command:
          "oci iam group list --compartment-id <tenancy_ocid>",
        description: "List IAM groups.",
      },
      {
        command:
          "oci iam group get --group-id <group_ocid>",
        description: "Get IAM group details.",
      },
      {
        command:
          "oci iam group-membership list --group-id <group_ocid>",
        description: "List members of an IAM group.",
      },
    ],
  },

  {
    title: "OCI IAM Policies",
    commands: [
      {
        command:
          "oci iam policy list --compartment-id <compartment_ocid>",
        description: "List IAM policies.",
      },
      {
        command:
          "oci iam policy get --policy-id <policy_ocid>",
        description: "Get IAM policy details.",
      },
      {
        command:
          "oci iam policy create --compartment-id <compartment_ocid> --name <name> --description <description> --statements <statements_json>",
        description: "Create an IAM policy.",
      },
      {
        command:
          "oci iam policy update --policy-id <policy_ocid> --statements <statements_json>",
        description: "Update IAM policy statements.",
      },
    ],
  },

  {
    title: "OCI Dynamic Groups and Instance Principals",
    commands: [
      {
        command:
          "oci iam dynamic-group list --compartment-id <tenancy_ocid>",
        description: "List dynamic groups.",
      },
      {
        command:
          "oci iam dynamic-group get --dynamic-group-id <dynamic_group_ocid>",
        description: "Get dynamic group details.",
      },
      {
        command:
          "oci iam dynamic-group create --compartment-id <tenancy_ocid> --name <name> --description <description> --matching-rule <matching_rule>",
        description: "Create a dynamic group.",
      },
      {
        command:
          "oci --auth instance_principal os ns get",
        description:
          "Use instance principal authentication to access OCI services from an OCI compute instance.",
      },
    ],
  },

  {
    title: "OCI Vault and Secrets",
    commands: [
      {
        command:
          "oci kms management vault list --compartment-id <compartment_ocid>",
        description: "List OCI Vaults.",
      },
      {
        command:
          "oci kms management vault get --vault-id <vault_ocid>",
        description: "Get Vault details.",
      },
      {
        command:
          "oci vault secret list --compartment-id <compartment_ocid>",
        description: "List secrets in a compartment.",
      },
      {
        command:
          "oci vault secret get --secret-id <secret_ocid>",
        description: "Get secret metadata.",
      },
      {
        command:
          "oci secrets secret-bundle get --secret-id <secret_ocid>",
        description: "Retrieve a secret bundle.",
      },
    ],
  },

  {
    title: "OCI DNS",
    commands: [
      {
        command:
          "oci dns zone list --compartment-id <compartment_ocid>",
        description: "List DNS zones.",
      },
      {
        command:
          "oci dns zone get --zone-name-or-id <zone_name_or_id>",
        description: "Get DNS zone details.",
      },
      {
        command:
          "oci dns record domain list --zone-name-or-id <zone_name_or_id> --domain <domain>",
        description: "List DNS records for a domain.",
      },
      {
        command:
          "oci dns record domain patch --zone-name-or-id <zone_name_or_id> --domain <domain> --items <records_json>",
        description: "Update DNS records using a patch operation.",
      },
    ],
  },

  {
    title: "OCI Monitoring",
    commands: [
      {
        command:
          "oci monitoring metric-data summarize-metrics-data --compartment-id <compartment_ocid> --namespace <namespace> --query-text <query>",
        description: "Query OCI Monitoring metric data.",
      },
      {
        command:
          "oci monitoring alarm list --compartment-id <compartment_ocid>",
        description: "List monitoring alarms.",
      },
      {
        command:
          "oci monitoring alarm get --alarm-id <alarm_ocid>",
        description: "Get monitoring alarm details.",
      },
      {
        command:
          "oci monitoring alarm-history-collection get-alarm-history --alarm-id <alarm_ocid>",
        description: "Retrieve monitoring alarm history.",
      },
    ],
  },

  {
    title: "OCI Logging",
    commands: [
      {
        command:
          "oci logging log-group list --compartment-id <compartment_ocid>",
        description: "List logging groups.",
      },
      {
        command:
          "oci logging log list --log-group-id <log_group_ocid>",
        description: "List logs in a log group.",
      },
      {
        command:
          "oci logging search search-logs --search-query <search_query> --time-start <start_time> --time-end <end_time>",
        description: "Search OCI logs using a logging search query.",
      },
      {
        command:
          "oci logging log get --log-group-id <log_group_ocid> --log-id <log_ocid>",
        description: "Get log configuration details.",
      },
    ],
  },

  {
    title: "OCI Audit",
    commands: [
      {
        command:
          "oci audit event list --compartment-id <compartment_ocid> --start-time <start_time> --end-time <end_time>",
        description: "List audit events for a specified time range.",
      },
      {
        command:
          "oci audit event list --compartment-id <compartment_ocid> --event-type <event_type>",
        description: "Filter audit events by event type.",
      },
    ],
  },

  {
    title: "OCI Database",
    commands: [
      {
        command:
          "oci db system list --compartment-id <compartment_ocid>",
        description: "List DB systems.",
      },
      {
        command:
          "oci db system get --db-system-id <db_system_ocid>",
        description: "Get DB system details.",
      },
      {
        command:
          "oci db system launch --compartment-id <compartment_ocid> --db-home <db_home_json> --database <database_json> --shape <shape>",
        description: "Launch a DB system.",
      },
      {
        command:
          "oci db database list --compartment-id <compartment_ocid> --db-system-id <db_system_ocid>",
        description: "List databases in a DB system.",
      },
    ],
  },

  {
    title: "OCI MySQL Database",
    commands: [
      {
        command:
          "oci mysql db-system list --compartment-id <compartment_ocid>",
        description: "List MySQL DB systems.",
      },
      {
        command:
          "oci mysql db-system get --db-system-id <db_system_ocid>",
        description: "Get MySQL DB system details.",
      },
      {
        command:
          "oci mysql db-system create --compartment-id <compartment_ocid> --shape-name <shape> --subnet-id <subnet_ocid> --admin-username <username>",
        description: "Create a MySQL DB system.",
      },
      {
        command:
          "oci mysql db-system delete --db-system-id <db_system_ocid>",
        description: "Delete a MySQL DB system.",
      },
    ],
  },

  {
    title: "OCI Functions",
    commands: [
      {
        command:
          "oci fn application list --compartment-id <compartment_ocid>",
        description: "List OCI Functions applications.",
      },
      {
        command:
          "oci fn function list --application-id <application_ocid>",
        description: "List functions in an application.",
      },
      {
        command:
          "oci fn function get --function-id <function_ocid>",
        description: "Get function details.",
      },
      {
        command:
          "fn deploy --app <application_name>",
        description:
          "Build and deploy an OCI Functions application using the Fn CLI.",
      },
      {
        command:
          "fn invoke <application_name> <function_name>",
        description: "Invoke an OCI Function using the Fn CLI.",
      },
    ],
  },

  {
    title: "OCI Resource Manager",
    commands: [
      {
        command:
          "oci resource-manager stack list --compartment-id <compartment_ocid>",
        description: "List Resource Manager stacks.",
      },
      {
        command:
          "oci resource-manager stack get --stack-id <stack_ocid>",
        description: "Get stack details.",
      },
      {
        command:
          "oci resource-manager job list --compartment-id <compartment_ocid>",
        description: "List Resource Manager jobs.",
      },
      {
        command:
          "oci resource-manager job get --job-id <job_ocid>",
        description: "Get Resource Manager job details.",
      },
      {
        command:
          "oci resource-manager job create-plan-job --stack-id <stack_ocid>",
        description: "Create a Terraform plan job.",
      },
      {
        command:
          "oci resource-manager job create-apply-job --stack-id <stack_ocid>",
        description: "Create a Terraform apply job.",
      },
    ],
  },

  {
    title: "OCI DevOps",
    commands: [
      {
        command:
          "oci devops project list --compartment-id <compartment_ocid>",
        description: "List OCI DevOps projects.",
      },
      {
        command:
          "oci devops project get --project-id <project_ocid>",
        description: "Get DevOps project details.",
      },
      {
        command:
          "oci devops repository list --project-id <project_ocid>",
        description: "List DevOps repositories.",
      },
      {
        command:
          "oci devops build-pipeline list --project-id <project_ocid>",
        description: "List DevOps build pipelines.",
      },
      {
        command:
          "oci devops deployment-pipeline list --project-id <project_ocid>",
        description: "List deployment pipelines.",
      },
      {
        command:
          "oci devops deployment list --compartment-id <compartment_ocid>",
        description: "List DevOps deployments.",
      },
    ],
  },

  {
    title: "OCI Work Requests",
    commands: [
      {
        command:
          "oci work-requests work-request list --compartment-id <compartment_ocid>",
        description: "List work requests.",
      },
      {
        command:
          "oci work-requests work-request get --work-request-id <work_request_ocid>",
        description: "Get work request details.",
      },
      {
        command:
          "oci work-requests work-request-error list --work-request-id <work_request_ocid>",
        description: "List errors associated with a work request.",
      },
      {
        command:
          "oci work-requests work-request-log-entry list --work-request-id <work_request_ocid>",
        description: "List work request log entries.",
      },
    ],
  },

  {
    title: "OCI CLI Output and Filtering",
    commands: [
      {
        command: "oci os bucket list --compartment-id <compartment_ocid> --output table",
        description: "Display command output in table format.",
      },
      {
        command:
          "oci compute instance list --compartment-id <compartment_ocid> --query 'data[].{name:\"display-name\",state:\"lifecycle-state\"}'",
        description: "Use a JMESPath query to select fields from OCI CLI JSON output.",
      },
      {
        command:
          "oci compute instance list --compartment-id <compartment_ocid> --raw-output --query 'data[0].\"display-name\"'",
        description:
          "Return a single queried string without surrounding JSON quotes.",
      },
      {
        command:
          "oci os bucket get --bucket-name <bucket_name> --namespace-name <namespace> --generate-full-command-json-input",
        description:
          "Generate a JSON template containing the command's possible parameters.",
      },
      {
        command:
          "oci --profile PROD compute instance list --compartment-id <compartment_ocid>",
        description: "Run an OCI CLI command using the PROD profile.",
      },
    ],
  },

  {
    title: "OCI CLI Troubleshooting",
    commands: [
      {
        command: "oci --debug iam region list",
        description: "Enable debug output for troubleshooting CLI requests.",
      },
      {
        command:
          "oci --config-file ~/.oci/config --profile DEFAULT iam region list",
        description:
          "Explicitly select an OCI configuration file and profile.",
      },
      {
        command:
          "oci --region <region> iam region list",
        description: "Explicitly target an OCI region.",
      },
      {
        command:
          "oci --auth api_key iam region list",
        description: "Explicitly use API key authentication.",
      },
      {
        command:
          "oci --no-retry compute instance get --instance-id <instance_ocid>",
        description: "Disable OCI CLI retry behavior for a request.",
      },
      {
        command:
          "oci --connection-timeout 30 iam region list",
        description: "Increase the connection timeout for a CLI request.",
      },
    ],
  },

  {
    title: "OCI DevOps Workflow",
    commands: [
      {
        command:
          "oci artifacts container repository list --compartment-id <compartment_ocid>",
        description: "Verify that the target OCI container repository exists.",
      },
      {
        command:
          "docker build -t <region-key>.ocir.io/<namespace>/<repository>:<tag> .",
        description: "Build a Docker image for an OCI Container Registry repository.",
      },
      {
        command:
          "docker push <region-key>.ocir.io/<namespace>/<repository>:<tag>",
        description: "Push a Docker image to OCI Container Registry.",
      },
      {
        command:
          "oci ce cluster create-kubeconfig --cluster-id <cluster_ocid> --file $HOME/.kube/config",
        description: "Configure kubectl access to an OKE cluster.",
      },
      {
        command:
          "kubectl set image deployment/<deployment> <container>=<image>:<tag>",
        description: "Update a Kubernetes deployment image after a container build.",
      },
      {
        command:
          "oci resource-manager job create-apply-job --stack-id <stack_ocid>",
        description:
          "Trigger a Terraform apply job through OCI Resource Manager.",
      },
    ],
  },

  {
    title: "Useful OCI DevOps Commands",
    commands: [
      {
        command:
          "oci iam availability-domain list --compartment-id <compartment_ocid>",
        description: "Check available availability domains.",
      },
      {
        command:
          "oci compute instance list --compartment-id <compartment_ocid> --output table",
        description: "Quickly inspect compute instances in table format.",
      },
      {
        command:
          "oci os bucket list --compartment-id <compartment_ocid> --output table",
        description: "Quickly inspect Object Storage buckets.",
      },
      {
        command:
          "oci network subnet list --compartment-id <compartment_ocid> --vcn-id <vcn_ocid> --output table",
        description: "Quickly inspect VCN subnets.",
      },
      {
        command:
          "oci ce cluster list --compartment-id <compartment_ocid> --output table",
        description: "Quickly inspect OKE clusters.",
      },
      {
        command:
          "oci monitoring alarm list --compartment-id <compartment_ocid> --output table",
        description: "Quickly inspect monitoring alarms.",
      },
    ],
  },
];

export default function OciCliPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <a
          href="/"
          className="mb-8 inline-flex items-center text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
        >
          ← Back to DevOpsCommands
        </a>

        <header className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Oracle Cloud Infrastructure
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            OCI CLI Commands Cheat Sheet
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Practical Oracle Cloud Infrastructure CLI commands for Compute,
            Object Storage, VCN networking, OKE Kubernetes, Container Registry,
            IAM, Vault, databases, monitoring, logging and DevOps automation.
          </p>
        </header>

        <div className="mb-10 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-bold text-white">
            OCI CLI Command Structure
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            OCI CLI commands generally follow the structure:
          </p>

          <code className="mt-4 block overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-cyan-400">
            oci &lt;service&gt; &lt;type&gt; &lt;action&gt; &lt;options&gt;
          </code>

          <p className="mt-4 text-sm leading-6 text-slate-400">
            For example, Compute uses the service{" "}
            <code className="text-cyan-400">compute</code>, the resource type{" "}
            <code className="text-cyan-400">instance</code>, and actions such
            as <code className="text-cyan-400">list</code>,{" "}
            <code className="text-cyan-400">get</code>,{" "}
            <code className="text-cyan-400">launch</code> and{" "}
            <code className="text-cyan-400">terminate</code>.
          </p>
        </div>

        <OciCommandSearch sections={commandSections} />

        <div className="mt-12 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-bold">
            Recommended OCI DevOps Workflow
          </h2>

          <div className="mt-5 space-y-4">
            <div>
              <p className="font-semibold text-cyan-400">1. Authenticate</p>
              <code className="mt-2 block overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-300">
                oci session authenticate
              </code>
            </div>

            <div>
              <p className="font-semibold text-cyan-400">
                2. Check the target compartment
              </p>
              <code className="mt-2 block overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-300">
                oci iam compartment get --compartment-id &lt;compartment_ocid&gt;
              </code>
            </div>

            <div>
              <p className="font-semibold text-cyan-400">
                3. Inspect Compute or OKE
              </p>
              <code className="mt-2 block overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-300">
                oci compute instance list --compartment-id &lt;compartment_ocid&gt;
              </code>
            </div>

            <div>
              <p className="font-semibold text-cyan-400">
                4. Build and push a container
              </p>
              <code className="mt-2 block overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-300">
                docker build -t &lt;region-key&gt;.ocir.io/&lt;namespace&gt;/&lt;repository&gt;:&lt;tag&gt; .
              </code>
            </div>

            <div>
              <p className="font-semibold text-cyan-400">
                5. Deploy to OKE
              </p>
              <code className="mt-2 block overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-300">
                kubectl set image deployment/&lt;deployment&gt; &lt;container&gt;=&lt;image&gt;:&lt;tag&gt;
              </code>
            </div>

            <div>
              <p className="font-semibold text-cyan-400">
                6. Monitor the environment
              </p>
              <code className="mt-2 block overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-300">
                oci monitoring alarm list --compartment-id &lt;compartment_ocid&gt;
              </code>
            </div>
          </div>
        </div>

        <footer className="mt-12 border-t border-slate-800 pt-8 text-sm text-slate-500">
          OCI CLI commands are based on Oracle Cloud Infrastructure CLI
          command patterns and should be checked against your OCI CLI version
          and service configuration before production use.
        </footer>
      </div>
    </main>
  );
}