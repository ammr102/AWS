variable "vpc_cidr" {
  default = "10.0.0.0/24"
}

variable "public_subnet_cidr" {
  default = "10.0.0.0/25"
}

variable "availability_zone" {
  default = "eu-west-3a"
}

variable "instance_type" {
  default = "t2.micro"
}

variable "key_name" {
  default = "your-key-name" # Replace with your actual key pair name
}
