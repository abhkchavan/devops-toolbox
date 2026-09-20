import type { Metadata } from "next";
import AwsCommandSearch from "./AwsCommandSearch";

export const metadata: Metadata = {
  title: "AWS CLI Commands Cheat Sheet",
  description:
    "Comprehensive AWS CLI commands for EC2, S3, IAM, VPC, ECR, ECS, EKS, Lambda, RDS, CloudWatch, Route 53, Systems Manager and DevOps troubleshooting.",
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
    title: "AWS CLI Setup and Configuration",
    commands: [
      {
        command: "aws --version",
        description: "Display the installed AWS CLI version.",
      },
      {
        command: "aws configure",
        description:
          "Configure the default AWS access key, secret key, region and output format.",
      },
      {
        command: "aws configure list",
        description:
          "Show the credentials and configuration currently being used.",
      },
      {
        command: "aws configure get region",
        description: "Display the configured default AWS region.",
      },
      {
        command: "aws configure set region ap-south-1",
        description:
          "Set the default AWS region, for example Mumbai.",
      },
      {
        command: "aws configure list-profiles",
        description: "List configured AWS CLI profiles.",
      },
      {
        command: "aws sts get-caller-identity",
        description:
          "Show the AWS account, user or role associated with the current credentials.",
      },
      {
        command: "aws sts get-caller-identity --profile dev",
        description:
          "Check the identity associated with a specific AWS CLI profile.",
      },
    ],
  },

  {
    title: "AWS Profiles and Regions",
    commands: [
      {
        command: "aws s3 ls --profile dev",
        description:
          "Run an AWS command using a specific CLI profile.",
      },
      {
        command: "aws ec2 describe-instances --region ap-south-1",
        description:
          "Run an EC2 command against a specific AWS region.",
      },
      {
        command: "aws ec2 describe-regions",
        description: "List AWS regions available to the account.",
      },
      {
        command:
          "aws ec2 describe-availability-zones --region ap-south-1",
        description:
          "List Availability Zones in the selected AWS region.",
      },
    ],
  },

  {
    title: "EC2 Instances",
    commands: [
      {
        command: "aws ec2 describe-instances",
        description: "List and inspect EC2 instances.",
      },
      {
        command:
          "aws ec2 describe-instances --instance-ids i-0123456789abcdef0",
        description:
          "Retrieve information about a specific EC2 instance.",
      },
      {
        command:
          "aws ec2 start-instances --instance-ids i-0123456789abcdef0",
        description: "Start a stopped EC2 instance.",
      },
      {
        command:
          "aws ec2 stop-instances --instance-ids i-0123456789abcdef0",
        description: "Stop a running EC2 instance.",
      },
      {
        command:
          "aws ec2 reboot-instances --instance-ids i-0123456789abcdef0",
        description: "Reboot an EC2 instance.",
      },
      {
        command:
          "aws ec2 terminate-instances --instance-ids i-0123456789abcdef0",
        description: "Terminate an EC2 instance.",
      },
      {
        command:
          "aws ec2 describe-instance-status --instance-ids i-0123456789abcdef0",
        description:
          "Check the current system and instance status checks.",
      },
    ],
  },

  {
    title: "EC2 AMIs",
    commands: [
      {
        command: "aws ec2 describe-images --owners self",
        description:
          "List AMIs owned by the current AWS account.",
      },
      {
        command:
          "aws ec2 describe-images --owners amazon",
        description:
          "List Amazon-owned AMIs that are visible to the account.",
      },
      {
        command:
          "aws ec2 create-image --instance-id i-0123456789abcdef0 --name my-server-ami",
        description:
          "Create an AMI from an EC2 instance.",
      },
      {
        command:
          "aws ec2 deregister-image --image-id ami-0123456789abcdef0",
        description: "Deregister an AMI.",
      },
    ],
  },

  {
    title: "EC2 Security Groups",
    commands: [
      {
        command: "aws ec2 describe-security-groups",
        description: "List EC2 security groups.",
      },
      {
        command:
          "aws ec2 describe-security-groups --group-ids sg-0123456789abcdef0",
        description:
          "Display the rules and configuration of a specific security group.",
      },
      {
        command:
          "aws ec2 authorize-security-group-ingress --group-id sg-0123456789abcdef0 --protocol tcp --port 22 --cidr 203.0.113.10/32",
        description:
          "Add an inbound TCP rule to a security group.",
      },
      {
        command:
          "aws ec2 revoke-security-group-ingress --group-id sg-0123456789abcdef0 --protocol tcp --port 22 --cidr 203.0.113.10/32",
        description:
          "Remove an inbound security group rule.",
      },
    ],
  },

  {
    title: "S3 Buckets",
    commands: [
      {
        command: "aws s3 ls",
        description: "List S3 buckets.",
      },
      {
        command: "aws s3 ls s3://my-bucket",
        description: "List objects in an S3 bucket.",
      },
      {
        command: "aws s3 mb s3://my-bucket",
        description: "Create an S3 bucket.",
      },
      {
        command: "aws s3 rb s3://my-bucket",
        description:
          "Remove an empty S3 bucket.",
      },
      {
        command:
          "aws s3 rb s3://my-bucket --force",
        description:
          "Remove an S3 bucket and its objects. Use with caution.",
      },
    ],
  },

  {
    title: "S3 Files and Sync",
    commands: [
      {
        command:
          "aws s3 cp file.txt s3://my-bucket/",
        description:
          "Upload a local file to S3.",
      },
      {
        command:
          "aws s3 cp s3://my-bucket/file.txt .",
        description:
          "Download an object from S3.",
      },
      {
        command:
          "aws s3 cp ./app s3://my-bucket/app --recursive",
        description:
          "Upload a directory and its contents to S3.",
      },
      {
        command:
          "aws s3 sync ./build s3://my-bucket/build",
        description:
          "Synchronize a local directory with an S3 prefix.",
      },
      {
        command:
          "aws s3 sync s3://my-bucket/build ./build",
        description:
          "Synchronize an S3 prefix with a local directory.",
      },
      {
        command:
          "aws s3 rm s3://my-bucket/file.txt",
        description:
          "Delete an S3 object.",
      },
      {
        command:
          "aws s3 rm s3://my-bucket/logs/ --recursive",
        description:
          "Delete objects under an S3 prefix.",
      },
    ],
  },

  {
    title: "IAM Users and Roles",
    commands: [
      {
        command: "aws iam list-users",
        description: "List IAM users.",
      },
      {
        command: "aws iam get-user",
        description:
          "Retrieve information about the current IAM user when applicable.",
      },
      {
        command: "aws iam list-roles",
        description: "List IAM roles.",
      },
      {
        command:
          "aws iam get-role --role-name MyRole",
        description:
          "Display information about an IAM role.",
      },
      {
        command:
          "aws iam list-attached-role-policies --role-name MyRole",
        description:
          "List managed policies attached to an IAM role.",
      },
      {
        command:
          "aws iam list-attached-user-policies --user-name my-user",
        description:
          "List managed policies attached to an IAM user.",
      },
    ],
  },

  {
    title: "IAM Policies",
    commands: [
      {
        command: "aws iam list-policies",
        description:
          "List IAM policies visible to the account.",
      },
      {
        command:
          "aws iam get-policy --policy-arn arn:aws:iam::123456789012:policy/MyPolicy",
        description:
          "Retrieve metadata about an IAM policy.",
      },
      {
        command:
          "aws iam list-policy-versions --policy-arn arn:aws:iam::123456789012:policy/MyPolicy",
        description:
          "List versions of an IAM managed policy.",
      },
      {
        command:
          "aws iam get-policy-version --policy-arn arn:aws:iam::123456789012:policy/MyPolicy --version-id v1",
        description:
          "Retrieve the document for a specific IAM policy version.",
      },
    ],
  },

  {
    title: "VPC and Networking",
    commands: [
      {
        command: "aws ec2 describe-vpcs",
        description: "List VPCs.",
      },
      {
        command: "aws ec2 describe-subnets",
        description: "List VPC subnets.",
      },
      {
        command: "aws ec2 describe-route-tables",
        description: "List route tables.",
      },
      {
        command: "aws ec2 describe-internet-gateways",
        description: "List Internet Gateways.",
      },
      {
        command: "aws ec2 describe-nat-gateways",
        description: "List NAT Gateways.",
      },
      {
        command: "aws ec2 describe-network-interfaces",
        description:
          "List Elastic Network Interfaces.",
      },
    ],
  },

  {
    title: "EBS Volumes",
    commands: [
      {
        command: "aws ec2 describe-volumes",
        description: "List EBS volumes.",
      },
      {
        command:
          "aws ec2 describe-volumes --volume-ids vol-0123456789abcdef0",
        description:
          "Display details about a specific EBS volume.",
      },
      {
        command:
          "aws ec2 create-volume --availability-zone ap-south-1a --size 20 --volume-type gp3",
        description:
          "Create a new gp3 EBS volume.",
      },
      {
        command:
          "aws ec2 delete-volume --volume-id vol-0123456789abcdef0",
        description:
          "Delete an EBS volume that is no longer required.",
      },
    ],
  },

  {
    title: "Elastic Load Balancing",
    commands: [
      {
        command: "aws elbv2 describe-load-balancers",
        description:
          "List Application Load Balancers and Network Load Balancers.",
      },
      {
        command: "aws elbv2 describe-target-groups",
        description:
          "List Elastic Load Balancing target groups.",
      },
      {
        command:
          "aws elbv2 describe-target-health --target-group-arn TARGET_GROUP_ARN",
        description:
          "Check the health of targets registered with a target group.",
      },
      {
        command:
          "aws elbv2 describe-listeners --load-balancer-arn LOAD_BALANCER_ARN",
        description:
          "List listeners configured on a load balancer.",
      },
    ],
  },

  {
    title: "Auto Scaling",
    commands: [
      {
        command: "aws autoscaling describe-auto-scaling-groups",
        description:
          "List Auto Scaling groups.",
      },
      {
        command:
          "aws autoscaling describe-auto-scaling-instances",
        description:
          "List instances managed by Auto Scaling.",
      },
      {
        command:
          "aws autoscaling set-desired-capacity --auto-scaling-group-name my-asg --desired-capacity 3",
        description:
          "Set the desired capacity of an Auto Scaling group.",
      },
      {
        command:
          "aws autoscaling update-auto-scaling-group --auto-scaling-group-name my-asg --min-size 2 --max-size 5",
        description:
          "Update the minimum and maximum capacity of an Auto Scaling group.",
      },
    ],
  },

  {
    title: "ECR",
    commands: [
      {
        command: "aws ecr describe-repositories",
        description:
          "List Amazon ECR repositories.",
      },
      {
        command:
          "aws ecr create-repository --repository-name myapp",
        description:
          "Create an ECR repository.",
      },
      {
        command:
          "aws ecr get-login-password --region ap-south-1",
        description:
          "Generate a temporary authentication password for an ECR registry.",
      },
      {
        command:
          "aws ecr list-images --repository-name myapp",
        description:
          "List images stored in an ECR repository.",
      },
      {
        command:
          "aws ecr describe-images --repository-name myapp",
        description:
          "Display metadata about images stored in ECR.",
      },
      {
        command:
          "aws ecr batch-delete-image --repository-name myapp --image-ids imageTag=latest",
        description:
          "Delete an image from an ECR repository.",
      },
    ],
  },

  {
    title: "ECS",
    commands: [
      {
        command: "aws ecs list-clusters",
        description: "List ECS clusters.",
      },
      {
        command:
          "aws ecs describe-clusters --clusters my-cluster",
        description:
          "Display information about an ECS cluster.",
      },
      {
        command:
          "aws ecs list-services --cluster my-cluster",
        description:
          "List services running in an ECS cluster.",
      },
      {
        command:
          "aws ecs describe-services --cluster my-cluster --services my-service",
        description:
          "Display ECS service configuration and deployment information.",
      },
      {
        command:
          "aws ecs list-tasks --cluster my-cluster",
        description:
          "List running or stopped ECS tasks.",
      },
      {
        command:
          "aws ecs describe-tasks --cluster my-cluster --tasks TASK_ARN",
        description:
          "Display detailed information about an ECS task.",
      },
    ],
  },

  {
    title: "EKS",
    commands: [
      {
        command: "aws eks list-clusters",
        description: "List EKS clusters.",
      },
      {
        command:
          "aws eks describe-cluster --name my-cluster",
        description:
          "Display configuration and status information for an EKS cluster.",
      },
      {
        command:
          "aws eks list-nodegroups --cluster-name my-cluster",
        description:
          "List managed node groups in an EKS cluster.",
      },
      {
        command:
          "aws eks describe-nodegroup --cluster-name my-cluster --nodegroup-name my-nodegroup",
        description:
          "Display information about an EKS managed node group.",
      },
      {
        command:
          "aws eks update-kubeconfig --region ap-south-1 --name my-cluster",
        description:
          "Configure kubectl to connect to an EKS cluster.",
      },
    ],
  },

  {
    title: "Lambda",
    commands: [
      {
        command: "aws lambda list-functions",
        description:
          "List Lambda functions.",
      },
      {
        command:
          "aws lambda get-function --function-name my-function",
        description:
          "Retrieve Lambda function configuration and deployment information.",
      },
      {
        command:
          "aws lambda invoke --function-name my-function response.json",
        description:
          "Invoke a Lambda function and save the response.",
      },
      {
        command:
          "aws lambda update-function-code --function-name my-function --zip-file fileb://function.zip",
        description:
          "Update Lambda function code from a ZIP package.",
      },
      {
        command:
          "aws lambda delete-function --function-name my-function",
        description:
          "Delete a Lambda function.",
      },
    ],
  },

  {
    title: "RDS",
    commands: [
      {
        command: "aws rds describe-db-instances",
        description:
          "List RDS database instances.",
      },
      {
        command:
          "aws rds describe-db-instances --db-instance-identifier mydb",
        description:
          "Display details about a specific RDS database instance.",
      },
      {
        command:
          "aws rds describe-db-clusters",
        description:
          "List RDS database clusters.",
      },
      {
        command:
          "aws rds reboot-db-instance --db-instance-identifier mydb",
        description:
          "Reboot an RDS database instance.",
      },
      {
        command:
          "aws rds stop-db-instance --db-instance-identifier mydb",
        description:
          "Stop an RDS database instance when the configuration supports stopping.",
      },
    ],
  },

  {
    title: "CloudWatch",
    commands: [
      {
        command: "aws cloudwatch list-metrics",
        description:
          "List CloudWatch metrics.",
      },
      {
        command:
          "aws cloudwatch list-metrics --namespace AWS/EC2",
        description:
          "List metrics from the EC2 CloudWatch namespace.",
      },
      {
        command:
          "aws cloudwatch get-metric-statistics --namespace AWS/EC2 --metric-name CPUUtilization --dimensions Name=InstanceId,Value=i-0123456789abcdef0 --statistics Average --period 300 --start-time 2026-09-20T10:00:00Z --end-time 2026-09-20T11:00:00Z",
        description:
          "Retrieve historical CPU utilization statistics for an EC2 instance.",
      },
      {
        command:
          "aws cloudwatch describe-alarms",
        description:
          "List CloudWatch alarms.",
      },
    ],
  },

  {
    title: "CloudWatch Logs",
    commands: [
      {
        command:
          "aws logs describe-log-groups",
        description:
          "List CloudWatch Logs log groups.",
      },
      {
        command:
          "aws logs describe-log-streams --log-group-name /aws/lambda/my-function",
        description:
          "List log streams in a CloudWatch log group.",
      },
      {
        command:
          "aws logs tail /aws/lambda/my-function --follow",
        description:
          "Stream recent CloudWatch log events from a log group.",
      },
      {
        command:
          "aws logs tail /aws/lambda/my-function --since 1h",
        description:
          "Display recent CloudWatch log events from the previous hour.",
      },
    ],
  },

  {
    title: "Route 53",
    commands: [
      {
        command: "aws route53 list-hosted-zones",
        description:
          "List Route 53 hosted zones.",
      },
      {
        command:
          "aws route53 list-resource-record-sets --hosted-zone-id Z123456789",
        description:
          "List DNS records in a hosted zone.",
      },
      {
        command:
          "aws route53 list-health-checks",
        description:
          "List Route 53 health checks.",
      },
    ],
  },

  {
    title: "Systems Manager",
    commands: [
      {
        command:
          "aws ssm describe-instance-information",
        description:
          "List managed instances registered with Systems Manager.",
      },
      {
        command:
          "aws ssm send-command --instance-ids i-0123456789abcdef0 --document-name AWS-RunShellScript --parameters commands='uname -a'",
        description:
          "Execute a shell command remotely through Systems Manager.",
      },
      {
        command:
          "aws ssm list-command-invocations",
        description:
          "List Systems Manager command invocations.",
      },
      {
        command:
          "aws ssm get-command-invocation --command-id COMMAND_ID --instance-id i-0123456789abcdef0",
        description:
          "Retrieve the output and status of a Systems Manager command.",
      },
    ],
  },

  {
    title: "Secrets Manager",
    commands: [
      {
        command: "aws secretsmanager list-secrets",
        description:
          "List secrets available to the current AWS identity.",
      },
      {
        command:
          "aws secretsmanager describe-secret --secret-id my-secret",
        description:
          "Display metadata about a secret.",
      },
      {
        command:
          "aws secretsmanager get-secret-value --secret-id my-secret",
        description:
          "Retrieve the current value of a secret when permitted.",
      },
    ],
  },

  {
    title: "CloudFormation",
    commands: [
      {
        command:
          "aws cloudformation list-stacks",
        description:
          "List CloudFormation stacks.",
      },
      {
        command:
          "aws cloudformation describe-stacks --stack-name my-stack",
        description:
          "Display CloudFormation stack details.",
      },
      {
        command:
          "aws cloudformation describe-stack-events --stack-name my-stack",
        description:
          "Display stack events useful for troubleshooting deployments.",
      },
      {
        command:
          "aws cloudformation describe-stack-resources --stack-name my-stack",
        description:
          "List resources created by a CloudFormation stack.",
      },
    ],
  },

  {
    title: "CloudTrail",
    commands: [
      {
        command:
          "aws cloudtrail describe-trails",
        description:
          "List CloudTrail trails.",
      },
      {
        command:
          "aws cloudtrail get-trail-status --name my-trail",
        description:
          "Check the current status of a CloudTrail trail.",
      },
      {
        command:
          "aws cloudtrail lookup-events --max-results 50",
        description:
          "Search recent CloudTrail events.",
      },
    ],
  },

  {
    title: "AWS Resource Tagging",
    commands: [
      {
        command:
          "aws resourcegroupstaggingapi get-resources",
        description:
          "List tagged resources available through the Resource Groups Tagging API.",
      },
      {
        command:
          "aws resourcegroupstaggingapi get-resources --tag-filters Key=Environment,Values=production",
        description:
          "Find resources using a specific tag filter.",
      },
    ],
  },

  {
    title: "AWS Cost and Usage",
    commands: [
      {
        command:
          "aws ce get-cost-and-usage --time-period Start=2026-09-01,End=2026-10-01 --granularity MONTHLY --metrics UnblendedCost",
        description:
          "Retrieve cost and usage data for a specified time period.",
      },
      {
        command:
          "aws budgets describe-budgets --account-id 123456789012",
        description:
          "List AWS Budgets configured for an account.",
      },
    ],
  },

  {
    title: "Useful JSON and Output Options",
    commands: [
      {
        command:
          "aws ec2 describe-instances --output json",
        description:
          "Return AWS CLI output as JSON.",
      },
      {
        command:
          "aws ec2 describe-instances --output table",
        description:
          "Display AWS CLI output in a table.",
      },
      {
        command:
          "aws ec2 describe-instances --query 'Reservations[].Instances[].InstanceId'",
        description:
          "Use JMESPath to extract specific fields from AWS CLI output.",
      },
      {
        command:
          "aws ec2 describe-instances --query 'Reservations[].Instances[].{ID:InstanceId,State:State.Name}' --output table",
        description:
          "Extract selected EC2 fields and display them as a table.",
      },
    ],
  },

  {
    title: "AWS CLI Troubleshooting",
    commands: [
      {
        command: "aws sts get-caller-identity",
        description:
          "Verify which AWS identity is currently being used.",
      },
      {
        command: "aws configure list",
        description:
          "Check which credentials, region and profile configuration are active.",
      },
      {
        command:
          "aws ec2 describe-instances --region ap-south-1",
        description:
          "Check whether a resource is being searched in the expected region.",
      },
      {
        command:
          "aws s3 ls --debug",
        description:
          "Enable AWS CLI debug logging when troubleshooting authentication or API problems.",
      },
      {
        command:
          "aws sts get-caller-identity --profile production",
        description:
          "Verify credentials for a specific AWS profile.",
      },
    ],
  },

  {
    title: "CI/CD AWS Workflow",
    commands: [
      {
        command:
          "aws sts get-caller-identity",
        description:
          "Verify AWS credentials at the beginning of a CI/CD job.",
      },
      {
        command:
          "aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin ACCOUNT_ID.dkr.ecr.ap-south-1.amazonaws.com",
        description:
          "Authenticate Docker with an Amazon ECR registry.",
      },
      {
        command:
          "docker build -t myapp:$BUILD_NUMBER .",
        description:
          "Build a Docker image using a CI build number as the tag.",
      },
      {
        command:
          "docker push ACCOUNT_ID.dkr.ecr.ap-south-1.amazonaws.com/myapp:$BUILD_NUMBER",
        description:
          "Push a CI-built Docker image to Amazon ECR.",
      },
      {
        command:
          "aws eks update-kubeconfig --region ap-south-1 --name production",
        description:
          "Configure kubectl access to an EKS cluster in a deployment pipeline.",
      },
    ],
  },
];

export default function AwsCliCommands() {
  const totalCommands = commandSections.reduce(
    (total, section) => total + section.commands.length,
    0,
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <a
          href="/"
          className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
        >
          ← Back to DevOpsCommands
        </a>

        <header className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            AWS
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            AWS CLI Commands Cheat Sheet
          </h1>

          <p className="mt-4 max-w-3xl text-slate-400">
            Practical AWS CLI commands for EC2, S3, IAM, VPC, ECR, ECS, EKS,
            Lambda, RDS, CloudWatch, Route 53, Systems Manager and CI/CD.
          </p>

          <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-400">
            <span className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2">
              {commandSections.length} categories
            </span>

            <span className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2">
              {totalCommands}+ commands
            </span>
          </div>
        </header>

        <AwsCommandSearch sections={commandSections} />

        <section className="mt-12 rounded-xl border border-cyan-900 bg-slate-900 p-6">
          <h2 className="text-xl font-bold">
            Recommended AWS DevOps Workflow
          </h2>

          <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm leading-7 text-slate-300">
{`# Check AWS identity
aws sts get-caller-identity

# Configure ECR authentication
aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin ACCOUNT_ID.dkr.ecr.ap-south-1.amazonaws.com

# Build application image
docker build -t myapp:$BUILD_NUMBER .

# Tag image
docker tag myapp:$BUILD_NUMBER ACCOUNT_ID.dkr.ecr.ap-south-1.amazonaws.com/myapp:$BUILD_NUMBER

# Push image
docker push ACCOUNT_ID.dkr.ecr.ap-south-1.amazonaws.com/myapp:$BUILD_NUMBER

# Configure EKS access
aws eks update-kubeconfig --region ap-south-1 --name production

# Deploy application
kubectl apply -f k8s/

# Check deployment
kubectl get pods`}
          </pre>
        </section>

        <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-bold">
            DevOpsCommands Tip
          </h2>

          <p className="mt-3 leading-7 text-slate-400">
            Avoid putting long-lived AWS access keys directly into Jenkins,
            GitHub Actions or other CI/CD configuration. Prefer short-lived
            credentials and IAM roles where the deployment environment
            supports them.
          </p>
        </section>

        <footer className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">
          AWS CLI commands can depend on the AWS CLI version, IAM permissions,
          selected region, account configuration and the AWS service being
          used.
        </footer>
      </div>
    </main>
  );
}