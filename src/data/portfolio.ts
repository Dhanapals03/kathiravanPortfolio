export type NavItem = {
  label: string;
  href: string;
};

export type HeroStat = {
  label: string;
  value: string;
  note: string;
};

export type AboutHighlight = {
  title: string;
  description: string;
};

export type SkillCategoryKey =
  | 'cloud'
  | 'devops'
  | 'containers'
  | 'iac'
  | 'monitoring'
  | 'basics';

export type SkillCategory = {
  key: SkillCategoryKey;
  title: string;
  description: string;
  skills: string[];
};

export type PipelineStepKey =
  | 'version'
  | 'build'
  | 'deploy'
  | 'govern'
  | 'observe';

export type PipelineStep = {
  key: PipelineStepKey;
  title: string;
  description: string;
  caption: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
};

export type ContactLink = {
  label: string;
  href: string;
  note: string;
  kind: 'linkedin' | 'email' | 'github';
};

export const portfolioData = {
  profile: {
    name: 'Kathiravan Thangavel',
    role: 'Azure DevOps Engineer',
    company: 'vThink Global Technologies Private Limited',
    tagline: 'Building reliable cloud infrastructure and automated DevOps pipelines',
    summary:
      'Skilled Azure DevOps Engineer with expertise in Azure administration, Linux, cloud infrastructure, automation, CI/CD, containers, monitoring, and DevOps workflows.',
    linkedin: 'https://www.linkedin.com/in/kathiravan-thangavel-4850a9280',
  },
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Pipeline', href: '#pipeline' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ] satisfies NavItem[],
  heroStats: [
    {
      label: 'Cloud Stack',
      value: 'Azure + AWS',
      note: 'Cross-environment cloud support and infrastructure delivery.',
    },
    {
      label: 'Delivery Mode',
      value: 'CI/CD Automation',
      note: 'Repeatable workflows built for consistent releases and lower friction.',
    },
    {
      label: 'Runtime Focus',
      value: 'Docker + Kubernetes',
      note: 'Container-first deployment patterns and orchestration workflows.',
    },
  ] satisfies HeroStat[],
  about: {
    description:
      'Kathiravan works at the intersection of platform engineering, release automation, and cloud operations. His profile blends Azure administration with Linux fluency, infrastructure automation, container orchestration, and observability practices that keep delivery pipelines stable and production-ready.',
    highlights: [
      {
        title: 'Cloud-first execution',
        description: 'Hands-on delivery across Azure services, infrastructure layers, and operational cloud workflows.',
      },
      {
        title: 'Pipeline reliability',
        description: 'CI/CD systems designed for repeatable releases, faster deployments, and lower operational friction.',
      },
      {
        title: 'Automation mindset',
        description: 'Terraform, Ansible, and container workflows used to reduce drift and improve scale.',
      },
      {
        title: 'Observability loop',
        description: 'Monitoring and metrics with Prometheus and Grafana to keep systems measurable and healthy.',
      },
    ] satisfies AboutHighlight[],
  },
  skillCategories: [
    {
      key: 'cloud',
      title: 'Cloud',
      description: 'Cloud platform administration and infrastructure delivery.',
      skills: ['Azure', 'AWS'],
    },
    {
      key: 'devops',
      title: 'DevOps',
      description: 'Release orchestration, deployment control, and workflow automation.',
      skills: ['Azure DevOps', 'Jenkins', 'ArgoCD'],
    },
    {
      key: 'containers',
      title: 'Containers',
      description: 'Container build, orchestration, and cluster-centric deployments.',
      skills: ['Docker', 'Kubernetes'],
    },
    {
      key: 'iac',
      title: 'IaC & Automation',
      description: 'Infrastructure as code and repeatable configuration management.',
      skills: ['Terraform', 'Ansible'],
    },
    {
      key: 'monitoring',
      title: 'Monitoring',
      description: 'Signals, dashboards, and operational visibility across environments.',
      skills: ['Prometheus', 'Grafana'],
    },
    {
      key: 'basics',
      title: 'Basics',
      description: 'Core engineering fundamentals that anchor reliable DevOps execution.',
      skills: ['Networking Basics', 'Git', 'Linux'],
    },
  ] satisfies SkillCategory[],
  pipelineSteps: [
    {
      key: 'version',
      title: 'Version & Plan',
      description: 'Track changes through Git-driven workflows and keep every deployment traceable.',
      caption: 'Source control discipline',
    },
    {
      key: 'build',
      title: 'Build & Validate',
      description: 'Automate image creation, environment setup, and repeatable pipeline checks.',
      caption: 'CI gates and automation',
    },
    {
      key: 'deploy',
      title: 'Release & Orchestrate',
      description: 'Ship workloads into containerized targets with safer rollout control.',
      caption: 'Containers and orchestration',
    },
    {
      key: 'govern',
      title: 'Secure & Standardize',
      description: 'Reduce drift with infrastructure as code, templates, and environment consistency.',
      caption: 'Policy through automation',
    },
    {
      key: 'observe',
      title: 'Monitor & Improve',
      description: 'Close the loop with metrics, dashboards, and feedback from running systems.',
      caption: 'Prometheus and Grafana',
    },
  ] satisfies PipelineStep[],
  projects: [
    {
      title: 'White Cub',
      description:
        'Delivered DevOps and cloud infrastructure support with a focus on stable releases, deployment automation, and CI/CD workflow setup.',
      tech: ['Azure DevOps', 'CI/CD', 'Automation', 'Cloud Infrastructure'],
      highlights: [
        'Supported delivery pipelines for repeatable deployments.',
        'Improved automation around release execution and environment workflows.',
        'Contributed to cloud infrastructure support for smoother operations.',
      ],
    },
    {
      title: 'ACRT',
      description:
        'Handled infrastructure and deployment support while maintaining cloud environments, monitoring coverage, and automation workflows.',
      tech: ['Azure', 'Monitoring', 'Linux', 'Automation'],
      highlights: [
        'Maintained deployment support across cloud-hosted environments.',
        'Strengthened monitoring and operational visibility workflows.',
        'Contributed automation that reduced repetitive infrastructure tasks.',
      ],
    },
    {
      title: 'vThink Internal Products',
      description:
        'Supported internal product deployments through CI/CD maintenance and Docker/Kubernetes-based delivery workflows.',
      tech: ['Docker', 'Kubernetes', 'Azure DevOps', 'Jenkins'],
      highlights: [
        'Maintained internal deployment pipelines across multiple product workflows.',
        'Supported container-first release patterns using Docker and Kubernetes.',
        'Improved stability of CI/CD maintenance for internal engineering teams.',
      ],
    },
  ] satisfies Project[],
  experience: {
    company: 'vThink Global Technologies Private Limited',
    role: 'Azure DevOps Engineer',
    period: 'Current Role',
    summary:
      'Working across cloud administration, automation, deployment workflows, and observability for production-oriented delivery systems.',
    highlights: [
      'Azure administration and cloud infrastructure support',
      'Linux operations and platform workflow execution',
      'CI/CD pipeline design, maintenance, and deployment automation',
      'Docker and Kubernetes-based application delivery',
      'Monitoring dashboards and operational visibility with Prometheus and Grafana',
    ],
    toolkit: ['Azure', 'Linux', 'Terraform', 'Ansible', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana'],
  },
  contactLinks: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kathiravan-thangavel-4850a9280',
      note: 'Primary professional profile',
      kind: 'linkedin',
    },
    {
      label: 'Email',
      href: 'mailto:hello@yourdomain.dev',
      note: 'Placeholder email. Replace in src/data/portfolio.ts',
      kind: 'email',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/your-github',
      note: 'Placeholder GitHub profile. Replace in src/data/portfolio.ts',
      kind: 'github',
    },
  ] satisfies ContactLink[],
} as const;

export type PortfolioData = typeof portfolioData;
