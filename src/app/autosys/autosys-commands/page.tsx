import AutosysCommandSearch from "./AutosysCommandSearch";

export const metadata = {
  title: "AutoSys Commands Cheat Sheet | DevOpsCommands",
  description:
    "Practical AutoSys commands for jobs, boxes, dependencies, conditions, calendars, sendevent, autorep, job control, monitoring and production troubleshooting.",
};

type AutosysCommand = {
  command: string;
  description: string;
};

type AutosysSection = {
  title: string;
  commands: AutosysCommand[];
};

const commandSections: AutosysSection[] = [
  {
    title: "AutoSys Version & Basic Commands",
    commands: [
      {
        command: "autorep -V",
        description:
          "Displays the AutoSys autorep utility version information.",
      },
      {
        command: "autorep -J <job_name>",
        description:
          "Displays detailed information about a specific AutoSys job.",
      },
      {
        command: "autorep -J ALL",
        description:
          "Displays information for all jobs visible to the current AutoSys environment.",
      },
      {
        command: "autorep -J <job_name> -q",
        description:
          "Displays the JIL definition and configuration information for a job.",
      },
      {
        command: "autorep -J <job_name> -r",
        description:
          "Displays historical run information for the specified job.",
      },
    ],
  },

  {
    title: "Job Status & Monitoring",
    commands: [
      {
        command: "autorep -J <job_name>",
        description:
          "Checks the current status and configuration of a job.",
      },
      {
        command: "autorep -J <job_name> -r",
        description:
          "Shows historical execution information for a job.",
      },
      {
        command: "autorep -J <job_name> -d",
        description:
          "Displays detailed job information useful for troubleshooting.",
      },
      {
        command: "autorep -J <job_name> -q",
        description:
          "Shows the job definition including conditions and scheduling attributes.",
      },
      {
        command: "autorep -M <machine_name>",
        description:
          "Displays information about jobs associated with a machine.",
      },
    ],
  },

  {
    title: "Starting & Controlling Jobs",
    commands: [
      {
        command: "sendevent -E STARTJOB -J <job_name>",
        description:
          "Sends a STARTJOB event to request execution of an AutoSys job.",
      },
      {
        command: "sendevent -E FORCE_STARTJOB -J <job_name>",
        description:
          "Forces a job to start without waiting for its normal starting conditions.",
      },
      {
        command: "sendevent -E KILLJOB -J <job_name>",
        description:
          "Sends a kill event to stop an executing AutoSys job.",
      },
      {
        command: "sendevent -E JOB_ON_HOLD -J <job_name>",
        description:
          "Places a job on hold so that it does not start normally.",
      },
      {
        command: "sendevent -E JOB_OFF_HOLD -J <job_name>",
        description:
          "Removes a hold from a job.",
      },
      {
        command: "sendevent -E JOB_ON_ICE -J <job_name>",
        description:
          "Places a job on ice so its normal scheduling behavior is suspended.",
      },
      {
        command: "sendevent -E JOB_OFF_ICE -J <job_name>",
        description:
          "Removes the ice state from a job.",
      },
    ],
  },

  {
    title: "Job Success & Failure",
    commands: [
      {
        command: "autorep -J <job_name> -r",
        description:
          "Reviews recent job execution history and exit information.",
      },
      {
        command: "sendevent -E CHANGE_STATUS -J <job_name> -s SUCCESS",
        description:
          "Changes the reported job status to SUCCESS when authorized operational procedures require it.",
      },
      {
        command: "sendevent -E CHANGE_STATUS -J <job_name> -s FAILURE",
        description:
          "Changes the reported job status to FAILURE when required for operational recovery.",
      },
      {
        command: "autorep -J <job_name> -q",
        description:
          "Checks job conditions, dependencies and configuration after a failure.",
      },
    ],
  },

  {
    title: "Job Dependencies",
    commands: [
      {
        command: "autorep -J <job_name> -q",
        description:
          "Displays the job definition including dependency conditions.",
      },
      {
        command: "autorep -J <parent_job> -q",
        description:
          "Checks the upstream job definition when a downstream job is waiting.",
      },
      {
        command: "autorep -J <child_job> -q",
        description:
          "Checks dependency conditions that control when the child job can start.",
      },
      {
        command: "autorep -J <job_name> -r",
        description:
          "Checks previous executions when diagnosing dependency-related delays.",
      },
    ],
  },

  {
    title: "Box Jobs",
    commands: [
      {
        command: "autorep -J <box_name> -q",
        description:
          "Displays the configuration of an AutoSys box job.",
      },
      {
        command: "autorep -J <box_name>",
        description:
          "Checks the current status of a box and its scheduling state.",
      },
      {
        command: "sendevent -E STARTJOB -J <box_name>",
        description:
          "Starts a box job when operational procedures require a manual start.",
      },
      {
        command: "sendevent -E JOB_ON_HOLD -J <box_name>",
        description:
          "Places a box on hold and prevents normal execution.",
      },
    ],
  },

  {
    title: "Calendars & Scheduling",
    commands: [
      {
        command: "autocal_asc",
        description:
          "Runs the AutoSys calendar utility where available in the installed environment.",
      },
      {
        command: "autorep -J <job_name> -q",
        description:
          "Checks the run_calendar and scheduling configuration of a job.",
      },
      {
        command: "autorep -J <job_name>",
        description:
          "Reviews the current scheduling state of a job.",
      },
      {
        command: "autorep -J <job_name> -r",
        description:
          "Reviews execution history when diagnosing schedule problems.",
      },
    ],
  },

  {
    title: "JIL Job Definitions",
    commands: [
      {
        command: "jil",
        description:
          "Starts the AutoSys Job Information Language interface.",
      },
      {
        command: "jil < job_definition.txt",
        description:
          "Loads JIL statements from a file into AutoSys.",
      },
      {
        command: "jil -V",
        description:
          "Displays JIL utility version information in supported environments.",
      },
      {
        command: "insert_job: <job_name>",
        description:
          "Defines a job name in a JIL job definition.",
      },
      {
        command: "command: <command>",
        description:
          "Defines the command that AutoSys should execute.",
      },
      {
        command: "machine: <machine_name>",
        description:
          "Defines the execution machine for a command job.",
      },
    ],
  },

  {
    title: "Common JIL Attributes",
    commands: [
      {
        command: "owner: <owner>",
        description:
          "Defines the owner associated with a job.",
      },
      {
        command: "permission: gx,ge,wx,we",
        description:
          "Defines job permissions in JIL.",
      },
      {
        command: "date_conditions: 1",
        description:
          "Enables date and time scheduling conditions.",
      },
      {
        command: "days_of_week: all",
        description:
          "Defines the days on which a job is eligible to run.",
      },
      {
        command: "start_times: " + "HH:MM",
        description:
          "Defines a scheduled start time for a job.",
      },
      {
        command: "condition: s(<job_name>)",
        description:
          "Starts a job after another job reaches SUCCESS.",
      },
      {
        command: "condition: f(<job_name>)",
        description:
          "Starts a job after another job reaches FAILURE.",
      },
    ],
  },

  {
    title: "Job Conditions",
    commands: [
      {
        command: "condition: s(<job_name>)",
        description:
          "Runs when the referenced job succeeds.",
      },
      {
        command: "condition: f(<job_name>)",
        description:
          "Runs when the referenced job fails.",
      },
      {
        command: "condition: d(<job_name>)",
        description:
          "Runs based on the dependency condition that the referenced job is done.",
      },
      {
        command: "condition: v(<job_name>)",
        description:
          "Uses a variable/event-based dependency condition in supported AutoSys configurations.",
      },
      {
        command: "condition: s(<job1>) & s(<job2>)",
        description:
          "Requires multiple upstream success conditions.",
      },
    ],
  },

  {
    title: "Machines & Agents",
    commands: [
      {
        command: "autorep -M <machine_name>",
        description:
          "Checks AutoSys jobs associated with a machine.",
      },
      {
        command: "autorep -J <job_name> -q",
        description:
          "Checks which machine a job is configured to use.",
      },
      {
        command: "autorep -J <job_name>",
        description:
          "Checks job state when investigating agent or machine issues.",
      },
      {
        command: "ping <agent_host>",
        description:
          "Checks basic network reachability to the AutoSys agent host.",
      },
    ],
  },

  {
    title: "Agent Troubleshooting",
    commands: [
      {
        command: "ps -ef | grep -i agent",
        description:
          "Checks whether the AutoSys agent-related process is running on Unix/Linux systems.",
      },
      {
        command: "netstat -an | grep <port>",
        description:
          "Checks whether the expected AutoSys agent communication port is listening.",
      },
      {
        command: "ss -lntp | grep <port>",
        description:
          "Checks listening TCP ports on modern Linux systems.",
      },
      {
        command: "telnet <agent_host> <port>",
        description:
          "Tests TCP connectivity when telnet is installed and permitted.",
      },
    ],
  },

  {
    title: "Events & sendevent",
    commands: [
      {
        command: "sendevent -E STARTJOB -J <job_name>",
        description:
          "Starts a job using an AutoSys event.",
      },
      {
        command: "sendevent -E FORCE_STARTJOB -J <job_name>",
        description:
          "Forces job execution when normal dependencies are intentionally bypassed.",
      },
      {
        command: "sendevent -E KILLJOB -J <job_name>",
        description:
          "Requests termination of a running job.",
      },
      {
        command: "sendevent -E JOB_ON_HOLD -J <job_name>",
        description:
          "Puts a job into hold state.",
      },
      {
        command: "sendevent -E JOB_OFF_HOLD -J <job_name>",
        description:
          "Removes a job from hold state.",
      },
      {
        command: "sendevent -E JOB_ON_ICE -J <job_name>",
        description:
          "Places a job on ice.",
      },
      {
        command: "sendevent -E JOB_OFF_ICE -J <job_name>",
        description:
          "Removes a job from ice.",
      },
    ],
  },

  {
    title: "Alarms & Notifications",
    commands: [
      {
        command: "autorep -J <job_name> -q",
        description:
          "Checks alarm and notification-related configuration in the job definition.",
      },
      {
        command: "autorep -J <job_name> -r",
        description:
          "Reviews execution history when investigating repeated alerts.",
      },
      {
        command: "autorep -J <job_name>",
        description:
          "Checks current status before investigating an operational alert.",
      },
    ],
  },

  {
    title: "Production Troubleshooting",
    commands: [
      {
        command: "autorep -J <job_name>",
        description:
          "First check to determine the current state of a problem job.",
      },
      {
        command: "autorep -J <job_name> -q",
        description:
          "Inspect the job definition, dependencies and scheduling configuration.",
      },
      {
        command: "autorep -J <job_name> -r",
        description:
          "Review recent executions and historical failures.",
      },
      {
        command: "sendevent -E FORCE_STARTJOB -J <job_name>",
        description:
          "Use only when the operational procedure explicitly requires bypassing normal scheduling conditions.",
      },
      {
        command: "sendevent -E KILLJOB -J <job_name>",
        description:
          "Terminate a stuck or runaway job when authorized.",
      },
    ],
  },

  {
    title: "Common AutoSys Problems",
    commands: [
      {
        command: "autorep -J <job_name>",
        description:
          "Use when a job appears stuck, inactive or unexpectedly running.",
      },
      {
        command: "autorep -J <job_name> -q",
        description:
          "Use when a job is waiting because of an unknown dependency or schedule.",
      },
      {
        command: "autorep -J <job_name> -r",
        description:
          "Use when investigating recurring job failures.",
      },
      {
        command: "autorep -M <machine_name>",
        description:
          "Use when multiple jobs on the same execution machine are affected.",
      },
      {
        command: "sendevent -E JOB_OFF_HOLD -J <job_name>",
        description:
          "Use when a job is intentionally or accidentally left on hold.",
      },
      {
        command: "sendevent -E JOB_OFF_ICE -J <job_name>",
        description:
          "Use when a job has been placed on ice and needs to return to normal scheduling.",
      },
    ],
  },

  {
    title: "Useful Production Workflow",
    commands: [
      {
        command: "autorep -J <job_name>",
        description:
          "Step 1: Check the current job status.",
      },
      {
        command: "autorep -J <job_name> -q",
        description:
          "Step 2: Check the job definition and dependencies.",
      },
      {
        command: "autorep -J <job_name> -r",
        description:
          "Step 3: Check recent execution history.",
      },
      {
        command: "autorep -M <machine_name>",
        description:
          "Step 4: Check whether other jobs on the same machine are affected.",
      },
      {
        command: "sendevent -E FORCE_STARTJOB -J <job_name>",
        description:
          "Step 5: If authorized, manually force a start when normal conditions are intentionally bypassed.",
      },
    ],
  },
];

export default function AutosysCommandsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <a
            href="/"
            className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
          >
            ← Back to DevOpsToolbox
          </a>

          <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            AutoSys • Scheduling • Production
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            AutoSys Commands Cheat Sheet
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Practical AutoSys commands for job monitoring, autorep, sendevent,
            JIL, dependencies, boxes, calendars, scheduling, agents,
            production support and troubleshooting.
          </p>
        </div>

        <AutosysCommandSearch sections={commandSections} />

        <div className="mt-12 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-bold text-white">
            AutoSys troubleshooting workflow
          </h2>

          <ol className="mt-5 space-y-3 text-sm leading-6 text-slate-400">
            <li>
              <span className="font-semibold text-cyan-400">1.</span>{" "}
              Check the job status with <code>autorep</code>.
            </li>

            <li>
              <span className="font-semibold text-cyan-400">2.</span>{" "}
              Inspect the JIL definition and conditions.
            </li>

            <li>
              <span className="font-semibold text-cyan-400">3.</span>{" "}
              Review previous executions and exit information.
            </li>

            <li>
              <span className="font-semibold text-cyan-400">4.</span>{" "}
              Check upstream dependencies, box state and calendar conditions.
            </li>

            <li>
              <span className="font-semibold text-cyan-400">5.</span>{" "}
              Check the execution machine and AutoSys agent when multiple jobs
              are affected.
            </li>

            <li>
              <span className="font-semibold text-cyan-400">6.</span>{" "}
              Use <code>sendevent</code> only according to your operational
              procedures and change controls.
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}
