provider "google" {
  project = var.project_id
  region  = var.region
}

resource "google_container_cluster" "primary" {
  name     = "gke-cluster"
  location = var.region
  initial_node_count = 3
}
